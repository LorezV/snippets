# Generated by Django 3.1.1 on 2021-02-26 17:37

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_auto_20210226_2237'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='friends',
            field=models.ManyToManyField(related_name='_user_friends_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
