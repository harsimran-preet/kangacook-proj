# Generated by Django 5.1 on 2024-08-23 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_remove_idea_email_remove_idea_favorite_dish_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interestedperson',
            name='name',
            field=models.TextField(max_length=100),
        ),
    ]
