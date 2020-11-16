from django.urls import path,include

'''path('likes/',include('')),
    path('comments/',include('')),
    path('playlists/',include('')),
    path('fit/',include('')),
    path('users/',include('')),
    path('workouts/',include('')),
    path('moments/',include('')),'''

urlpatterns = [
    path('blogs/',include('blog.urls')),
    path('moments/',include('moment.urls')),
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls'))
]