from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.fields import GenericRelation

class Moment(models.Model):
    title = models.CharField(max_length=200, unique=True)
    image = models.ImageField(upload_to='', null=True, verbose_name="")
    caption = models.CharField(max_length=140,unique=False,default='caption')
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='moment_user')
    created_on = models.DateTimeField(auto_now_add=True)
    #likes = GenericRelation(Like,related_query_name="pic_likes")
    #saves= GenericRelation(Saves,related_query_name="pic_saves")
    #tag = GenericRelation(Tag,related_query_name="tags")
    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title+": "+str(self.image)