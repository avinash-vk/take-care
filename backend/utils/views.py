from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from blog.models import Blog
from moment.models import Moment
from workout.models import Workout
from .models import Like,Comment,Saves,Tag

#not an api
def addTag(object):
    l = str(object.tagname).split(',')
    for i in l:
        Tag.objects.create(name = i,content_type=ContentType.objects.get_for_model(object),content_object=object)


@api_view(['POST'])
def setLike(request):
    try:
        data = JSONParser().parse(request)
        user = request.user
        object_type = data["type"]
        object_id = data["id"]
        if object_type==1:
            object_liked = Blog.objects.get(pk = object_id)
        elif object_type==2:
            object_liked = Moment.objects.get(pk = object_id)
        else:
            object_liked = Workout.objects.get(pk = object_id)


        l=[]
        like_set = Like.objects.all()
        for i in like_set:
            if i.liked_by == user and i.content_object == object_liked:
                l.append(i)
        like_set = l
        if list(like_set)==[]:
            Like.objects.create(content_type=ContentType.objects.get_for_model(object_liked),content_object=object_liked,liked_by = user)

        else:
            l = []
            o = object_liked.likes.all()
            for i in o:
                if i.liked_by == user and i.content_object == object_liked:
                    l.append(i)
            my_obj = l[0]
            my_obj.delete()
        return Response({"success": "done" })
    except Exception as e:
        return Response({"error": str(e) })


@api_view(['POST'])
def setSave(request):
    try:
        data = JSONParser().parse(request)
        user = request.user
        object_type = data["type"]
        object_id = data["id"]
        if object_type==1:
            object_saved = Blog.objects.get(pk = object_id)
        elif object_type==2:
            object_saved = Moment.objects.get(pk = object_id)
        else:
            object_saved = Workout.objects.get(pk = object_id)


        l=[]
        save_set = Save.objects.all()
        for i in save_set:
            if i.saved_by == user and i.content_object == object_liked:
                l.append(i)
        save_set = l
        if list(save_set)==[]:
            Save.objects.create(content_type=ContentType.objects.get_for_model(object_saved),content_object=object_saved,saved_by = user)

        else:
            l = []
            o = object_saved.likes.all()
            for i in o:
                if i.saved_by == user and i.content_object == object_saved:
                    l.append(i)
            my_obj = l[0]
            my_obj.delete()
        return Response({"success": "done" })
    except Exception as e:
        return Response({"error": str(e) })


@api_view(['POST'])
def setComment(request):
    try:
        data = JSONParser().parse(request)
        user = request.user
        object_type = data["type"]
        object_id = data["id"]
        body = data["comment"]
        if object_type==1:
            object_commented = Blog.objects.get(pk = object_id)
        elif object_type==2:
            object_commented = Moment.objects.get(pk = object_id)
        else:
            object_commented = Workout.objects.get(pk = object_id)


        Comment.objects.create(content_type=ContentType.objects.get_for_model(object_commented),content_object=object_commented,author = user, body= body)
        return Response({"success": "done" })
    except Exception as e:
        return Response({"error": str(e) })