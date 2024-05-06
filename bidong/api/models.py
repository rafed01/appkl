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
    end_time = models.DateTimeField(default=default_end_time)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='items')  # Add category relationship

    def save(self, *args, **kwargs):
        # Calculate the end_time if not set
        if not self.end_time:
            self.end_time = self.created_at + timedelta(days=7)

        # Save the instance
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class ItemImage(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='item_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for {self.item.name}"

class Bid(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Add a unique constraint on the combination of user and item
        unique_together = ('user', 'item')

    def __str__(self):
        return f"{self.user.username} - {self.amount}"


class UserInfo(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.BigIntegerField
    fullname = models.CharField(max_length=100)
    adress = models.CharField(max_length=200)
    email = models.CharField(max_length=200)

    class Meta:
        unique_together = ('username', 'fullname')

   
    


    