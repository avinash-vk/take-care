from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.fields import GenericRelation
#from feed.models import Like,Tag,Saves

class Workout(models.Model):
    title = models.CharField(max_length=200, unique=True)
    videofile = models.FileField(upload_to='', null=True, verbose_name="")
    caption = models.CharField(max_length=140,unique=False,default='caption')
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='workout_workouts')
    created_on = models.DateTimeField(auto_now_add=True)
    #likes = GenericRelation(Like,related_query_name="workout_likes")
    #saves = GenericRelation(Saves,related_query_name="workout_saves")
    #tag = GenericRelation(Tag,related_query_name="tags")
    
    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title+": "+str(self.videofile)
