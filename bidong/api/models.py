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
    creator = models.ForeignKey(User, on_delete=models.CASCADE, default=None)

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
    auction_entrance_price = models.DecimalField(max_digits=10, decimal_places=3, default=0)

    def __str__(self):
        return f"{self.bid_name}"

    def highest_bid(self):
        highest_bid = self.user_bids.order_by('-amount').first()
        return highest_bid.amount if highest_bid else None

    def highest_bidder(self):
        highest_bid = self.user_bids.order_by('-amount').first()
        if highest_bid:
            user_info = UserInfo.objects.get(creator=highest_bid.user)
            return user_info.fullname
        return None

class UserBid(models.Model):
    bid = models.ForeignKey(Bid, on_delete=models.CASCADE, related_name='user_bids')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=100, decimal_places=3)
    placed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} bid {self.amount} on {self.bid}"





class UserInfo(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    phone = models.CharField(max_length=50, default="+216")
    fullname = models.CharField(max_length=100, default="flen ben foulen")
    adress = models.CharField(max_length=200, default="home sweet home")
    city = models.CharField(max_length=100, default="home city")
    email = models.CharField(max_length=200, default="flen@mailbox")
    zip = models.CharField(max_length=50, default="1234")
    state = models.CharField(max_length=50, default="state affairs XD")
    profile_image = models.ImageField(upload_to='profile_images/', default='../media/profile_pic.png')

    def __str__(self):
        return f"{self.fullname}"
class Contact(models.Model):
    c_name = models.CharField(default="flen ben foulen", max_length=50)
    c_email = models.CharField(default="flen@mailbox", max_length=100)
    c_message = models.TextField(default="item description")


    def __str__(self):
         return f"{self.c_name}"
