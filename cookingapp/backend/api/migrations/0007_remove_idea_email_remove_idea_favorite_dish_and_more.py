# Generated by Django 5.1 on 2024-08-23 07:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_idea_delete_idea1'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='idea',
            name='email',
        ),
        migrations.RemoveField(
            model_name='idea',
            name='favorite_dish',
        ),
        migrations.RemoveField(
            model_name='idea',
            name='name',
        ),
    ]
