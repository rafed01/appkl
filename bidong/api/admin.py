from django.contrib import admin
from .models import Item, Category, Bid, ItemImage  # Import your models

# Register models in the admin interface
admin.site.register(Item)
admin.site.register(Category)
admin.site.register(Bid)
admin.site.register(ItemImage)





