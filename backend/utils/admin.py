from django.contrib import admin
from .models import Comment,Save,Like,Tag,Follow
# Register your models here.

admin.site.register(Comment)
admin.site.register(Save)
admin.site.register(Like)
admin.site.register(Tag)
admin.site.register(Follow)