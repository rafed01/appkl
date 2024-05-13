from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import timedelta


def default_end_time():
         return timezone.now() + timedelta(days=7)


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    starting_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, default=10)

    def __str__(self):
        return self.name

class ItemImage(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='item_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for {self.item.name}"

class Bid(models.Model):
    bid_name = models.CharField(max_length=100, default="bidName")
    bid_description = models.TextField(default="item description")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    bid_image1 = models.ImageField(upload_to='bid_images/', default=None, null=True)
    bid_image2 = models.ImageField(upload_to='bid_images/', default=None, null=True)
    bid_image3 = models.ImageField(upload_to='bid_images/', default=None, null=True)
    bid_image4 = models.ImageField(upload_to='bid_images/', default=None, null=True)
    bid_image5 = models.ImageField(upload_to='bid_images/', default=None, null=True)
    starting_price = models.DecimalField(max_digits=10, decimal_places=3, default=0)
    bid_category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='bids', null=True, blank=True)

    def __str__(self):
        return f"{self.bid_name}"


class UserInfo(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.BigIntegerField
    fullname = models.CharField(max_length=100)
    adress = models.CharField(max_length=200)
    email = models.CharField(max_length=200)

    class Meta:
        unique_together = ('username', 'fullname')


    