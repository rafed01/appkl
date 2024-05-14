# Generated by Django 5.0.4 on 2024-05-13 18:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_bid_end_time_item_item_image1_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='bid',
            unique_together=set(),
        ),
        migrations.AddField(
            model_name='bid',
            name='bid_category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bids', to='api.category'),
        ),
        migrations.AddField(
            model_name='bid',
            name='bid_description',
            field=models.TextField(default='item description'),
        ),
        migrations.AddField(
            model_name='bid',
            name='bid_image1',
            field=models.ImageField(default=None, null=True, upload_to='bid_images/'),
        ),
        migrations.AddField(
            model_name='bid',
            name='bid_image2',
            field=models.ImageField(default=None, null=True, upload_to='bid_images/'),
        ),
        migrations.AddField(
            model_name='bid',
            name='bid_image3',
            field=models.ImageField(default=None, null=True, upload_to='bid_images/'),
        ),
        migrations.AddField(
            model_name='bid',
            name='bid_image4',
            field=models.ImageField(default=None, null=True, upload_to='bid_images/'),
        ),
        migrations.AddField(
            model_name='bid',
            name='bid_image5',
            field=models.ImageField(default=None, null=True, upload_to='bid_images/'),
        ),
        migrations.AddField(
            model_name='bid',
            name='bid_name',
            field=models.CharField(default='bidName', max_length=100),
        ),
        migrations.AddField(
            model_name='bid',
            name='starting_price',
            field=models.DecimalField(decimal_places=3, default=0, max_digits=10),
        ),
        migrations.RemoveField(
            model_name='bid',
            name='amount',
        ),
        migrations.RemoveField(
            model_name='bid',
            name='item',
        ),
    ]