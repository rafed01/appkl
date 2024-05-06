
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CreateUserView, CustomTokenObtainPairView

router = DefaultRouter()
router.register(r'items', views.ItemViewSet)
router.register(r'bids', views.BidViewSet)
router.register(r'item-images', views.ItemImageViewSet)  # Register the ItemImage view set
router.register(r'categories', views.CategoryViewSet)
router.register(r'userinfo', views.UserInfoViewset)

urlpatterns = [
    path('', include(router.urls)),
]