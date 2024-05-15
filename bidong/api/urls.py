
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import UserInfoViewset, UserBidViewSet

router = DefaultRouter()
router.register(r'items', views.ItemViewSet)
router.register(r'bids', views.BidViewSet)
router.register(r'user-bids', UserBidViewSet)
router.register(r'item-images', views.ItemImageViewSet)  # Register the ItemImage view set
router.register(r'categories', views.CategoryViewSet)
router.register(r'userinfo', UserInfoViewset, basename='userinfo')
router.register(r'contact', views.ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]