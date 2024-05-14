# Generated by Django 5.0.4 on 2024-05-13 23:11

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_remove_item_item_image1_remove_item_item_image2_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='userinfo',
            unique_together=set(),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='city',
            field=models.CharField(default='home city', max_length=100),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='phone',
            field=models.CharField(default='+216', max_length=50),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='state',
            field=models.CharField(default='state affairs XD', max_length=50),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='zip',
            field=models.CharField(default='1234', max_length=50),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='adress',
            field=models.CharField(default='home sweet home', max_length=200),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='email',
            field=models.CharField(default='flen@mailbox', max_length=200),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='fullname',
            field=models.CharField(default='flen ben foulen', max_length=100),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='username',
            field=models.ForeignKey(default=10, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
