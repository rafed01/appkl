
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import UserInfoViewset, UserBidViewSet, get_user_details, CurrentUserView

router = DefaultRouter()
router.register(r'items', views.ItemViewSet)
router.register(r'bids', views.BidViewSet)
router.register(r'user-bids', UserBidViewSet, basename='user-bids')
router.register(r'item-images', views.ItemImageViewSet)  # Register the ItemImage view set
router.register(r'categories', views.CategoryViewSet)
router.register(r'userinfo', UserInfoViewset, basename='userinfo')
router.register(r'contact', views.ContactViewSet)

urlpatterns = [
    path('user/', get_user_details, name='user-details'),
    path('userid/', CurrentUserView.as_view(), name='current-user'),
    path('', include(router.urls)),
]