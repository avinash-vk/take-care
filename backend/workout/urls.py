from django.urls import path,include
from . import views 

urlpatterns = [
    path('',views.workouts_list),
    path('<int:pk>/',views.workout_detail),
]
