# Generated by Django 5.1 on 2024-08-23 10:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_interestedperson_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interestedperson',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
