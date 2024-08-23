from rest_framework import serializers
from .models import Recipe, Idea, InterestedPerson


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"


class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = "__all__"

class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterestedPerson
        fields = "__all__"