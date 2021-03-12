from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from rest_framework.authtoken import views as rviews
from .views import views
from .views.drfviews import RegistrationAPIView, LoginAPIView, UserRetrieveUpdateAPIView

drfauth_urls = [
    path('user', UserRetrieveUpdateAPIView.as_view(), name='user_login'),
    path('users/register', RegistrationAPIView.as_view(), name='user_registration'),
    path('users/login', LoginAPIView.as_view(), name='user_login'),
]


api_urls = [
    path('localuser', UserRetrieveUpdateAPIView.as_view()),
    path('authorization/', include(drfauth_urls)),
]

urlpatterns = [
    path("api/", include(api_urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]