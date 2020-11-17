from django.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
from django.contrib.contenttypes.fields import GenericRelation
from utils.models import Like,Tag,Save,Comment
import utils.views as Utils

class Blog(models.Model):

    title = models.CharField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts')
    updated_on = models.DateTimeField(auto_now= True)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    likes = GenericRelation(Like,related_query_name="blog_likes")
    save = GenericRelation(Save,related_query_name="blog_saves")
    tagname = models.CharField(max_length=30, default = "blog")
    tag = GenericRelation(Tag,related_query_name="tags")
    comment = GenericRelation(Comment,related_query_name="blog_comment")
    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title

    def save(self,*args,**kwargs):
        super(Blog,self).save(*args,**kwargs)
        Utils.addTag(self)
