from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from workout.models import Workout
from workout.serializers import WorkoutSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def workouts_list(request):
    # GET list of workouts, POST a new workout, DELETE all workouts
    if request.method == 'POST':
        workout_data = JSONParser().parse(request)
        workout_serializer = WorkoutSerializer(data=workout_data)
        if workout_serializer.is_valid():
            workout_serializer.save()
            return JsonResponse(workout_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(workout_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        workouts = Workout.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            workouts = workouts.filter(title__icontains=title)
        
        workouts_serializer = WorkoutSerializer(workouts, many=True)
        return JsonResponse(workouts_serializer.data, safe=False)
        

@api_view(['GET', 'PUT', 'DELETE'])
def workout_detail(request, pk):

    try: 
        workout = Workout.objects.get(pk=pk) 
    except workout.DoesNotExist: 
        return JsonResponse({'message': 'The workout does not exist'}, status=status.HTTP_404_NOT_FOUND) 

    # find workout by pk (id)
    if request.method == 'GET': 
        workout_serializer = WorkoutSerializer(workout) 
        return JsonResponse(workout_serializer.data) 


    elif request.method == 'PUT': 
        workout_data = JSONParser().parse(request) 
        workout_serializer = WorkoutSerializer(workout, data=workout_data) 
        if workout_serializer.is_valid(): 
            workout_serializer.save() 
            return JsonResponse(workout_serializer.data) 
        return JsonResponse(workout_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    # GET / PUT / DELETE workout
    elif request.method == 'DELETE': 
        workout.delete() 
        return JsonResponse({'message': 'workout was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)