from rest_framework import serializers
from .models import Item, Bid, ItemImage, Category, UserInfo, Contact, UserBid
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Add custom validation if needed
        return data
    


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'





class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemImage
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    images = ItemImageSerializer(many=True, read_only=True)
    category = Category()

    class Meta:
        model = Item
        fields = '__all__'


class BidSerializer(serializers.ModelSerializer):
    highest_bid = serializers.SerializerMethodField()
    highest_bidder = serializers.SerializerMethodField()

    class Meta:
        model = Bid
        fields = '__all__'

    def get_highest_bid(self, obj):
        return obj.highest_bid()

    def get_highest_bidder(self, obj):
        return obj.highest_bidder()


class UserInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserInfo
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = '__all__'


class UserBidSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBid
        fields = '__all__'
