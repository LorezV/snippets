from django.contrib import admin
from .models import User, Post

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'first_name', 'last_name', 'token')
    list_display_links = ('id', 'username')
    search_fields = ('id', 'username')
    list_editable = ('first_name', 'last_name')

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'author', 'publish_date')
    list_display_links = ('id',)
    search_fields = ('id', 'author')