from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.urls import reverse_lazy
from django.contrib.auth import authenticate, login
from django.contrib.auth.signals import user_logged_in
from ..models import *
from ..serializers import *