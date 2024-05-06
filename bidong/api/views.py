from rest_framework import viewsets, permissions
from .models import Item, Bid, ItemImage, Category, UserInfo
from .serializers import ItemSerializer, BidSerializer, ItemImageSerializer,CategorySerializer, UserInfoSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .serializers import UserSerializer, CustomTokenObtainPairSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer



class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ItemImageViewSet(viewsets.ModelViewSet):
    queryset = ItemImage.objects.all()
    serializer_class = ItemImageSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save()

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = []

class UserInfoViewset(viewsets.ModelViewSet):
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer
    permission_classes = []