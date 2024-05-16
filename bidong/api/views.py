from rest_framework import viewsets, permissions
from .models import Item, Bid, ItemImage, Category, UserInfo, Contact, UserBid
from .serializers import (
    ItemSerializer, 
    BidSerializer, 
    ItemImageSerializer,
    CategorySerializer, 
    UserInfoSerializer, 
    ContactSerializer, 
    UserBidSerializer,
    UserSerializer, 
    CustomTokenObtainPairSerializer
)
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import action, api_view, permission_classes
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework import status



class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    permission_classes = [AllowAny]

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
    permission_classes = [AllowAny]


class UserInfoViewset(viewsets.ModelViewSet):
    serializer_class = UserInfoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserInfo.objects.filter(creator=self.request.user)

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = []


class UserBidViewSet(viewsets.ModelViewSet):
    serializer_class = UserBidSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user_id = self.request.query_params.get('user')
        if user_id:
            return UserBid.objects.filter(user=user_id)
        return UserBid.objects.none()  # Return an empty queryset if user ID is not provided

    def create(self, request, *args, **kwargs):
        bid_id = request.data.get('bid')
        amount = request.data.get('amount')
        
        bid = get_object_or_404(Bid, id=bid_id)
        
        if amount and float(amount) > bid.starting_price:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": "Bid amount must be greater than the starting price."}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    user = request.user
    return Response({
        'id': user.id,
        'username': user.username,
        # Add other fields as necessary
    })


class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_id = request.user.id
        return Response({'user_id': user_id})