from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from moment.models import Moment
from moment.serializers import MomentSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def moments_list(request):
    # GET list of moments, POST a new moment, DELETE all moments
    if request.method == 'POST':
        moment_data = JSONParser().parse(request)
        moment_serializer = MomentSerializer(data=moment_data)
        if moment_serializer.is_valid():
            moment_serializer.save()
            return JsonResponse(moment_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(moment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        moments = Moment.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            moments = moments.filter(title__icontains=title)
        
        moments_serializer = MomentSerializer(moments, many=True)
        return JsonResponse(moments_serializer.data, safe=False)
        

@api_view(['GET', 'PUT', 'DELETE'])
def moment_detail(request, pk):

    try: 
        moment = Moment.objects.get(pk=pk) 
    except moment.DoesNotExist: 
        return JsonResponse({'message': 'The moment does not exist'}, status=status.HTTP_404_NOT_FOUND) 

    # find moment by pk (id)
    if request.method == 'GET': 
        moment_serializer = MomentSerializer(moment) 
        return JsonResponse(moment_serializer.data) 


    elif request.method == 'PUT': 
        moment_data = JSONParser().parse(request) 
        moment_serializer = MomentSerializer(moment, data=moment_data) 
        if moment_serializer.is_valid(): 
            moment_serializer.save() 
            return JsonResponse(moment_serializer.data) 
        return JsonResponse(moment_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    # GET / PUT / DELETE moment
    elif request.method == 'DELETE': 
        moment.delete() 
        return JsonResponse({'message': 'moment was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)