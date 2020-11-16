from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('likes/',include('')),
    path('comments/',include('')),
    path('playlists/',include('')),
    path('fit/',include('')),
    path('users/',include('')),
    path('workouts/',include('')),
    path('moments/',include('')),
    path('blogs/',include('')),
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls'))
]