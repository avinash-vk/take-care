from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from blog.models import Blog
from blog.serializers import BlogSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def blogs_list(request):
    # GET list of blogs, POST a new blog, DELETE all blogs
    if request.method == 'POST':
        blog_data = JSONParser().parse(request)
        blog_serializer = BlogSerializer(data=blog_data)
        if blog_serializer.is_valid():
            blog_serializer.save()
            return JsonResponse(blog_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(blog_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        blogs = Blog.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            blogs = blogs.filter(title__icontains=title)
        
        blogs_serializer = BlogSerializer(blogs, many=True)
        return JsonResponse(blogs_serializer.data, safe=False)
        

@api_view(['GET', 'PUT', 'DELETE'])
def blog_detail(request, pk):

    try: 
        blog = Blog.objects.get(pk=pk) 
    except blog.DoesNotExist: 
        return JsonResponse({'message': 'The blog does not exist'}, status=status.HTTP_404_NOT_FOUND) 

    # find blog by pk (id)
    if request.method == 'GET': 
        blog_serializer = BlogSerializer(blog) 
        return JsonResponse(blog_serializer.data) 


    elif request.method == 'PUT': 
        blog_data = JSONParser().parse(request) 
        blog_serializer = BlogSerializer(blog, data=blog_data) 
        if blog_serializer.is_valid(): 
            blog_serializer.save() 
            return JsonResponse(blog_serializer.data) 
        return JsonResponse(blog_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    # GET / PUT / DELETE blog
    elif request.method == 'DELETE': 
        blog.delete() 
        return JsonResponse({'message': 'blog was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)