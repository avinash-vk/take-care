from django.urls import path,include
from . import views 

urlpatterns = [
    path('',views.blogs_list),
    path('<int:pk>/',views.blog_detail),
]
