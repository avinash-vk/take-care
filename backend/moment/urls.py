from django.urls import path,include
from . import views 

urlpatterns = [
    path('',views.moments_list),
    path('<int:pk>/',views.moment_detail),
]
