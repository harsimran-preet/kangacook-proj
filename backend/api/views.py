from django.shortcuts import render
from rest_framework import generics
from .models import Recipe, Idea, InterestedPerson
from .serializers import RecipeSerializer, IdeaSerializer, NameSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class IdeaListCreate(generics.ListCreateAPIView):
    queryset = Idea.objects.all().order_by("-created_at")[
        :5
    ]  # Get 5 most recent recipes
    serializer_class = IdeaSerializer


class PopularRecipes(generics.ListAPIView):
    queryset = Recipe.objects.all().order_by("-created_at")[
        :5
    ]  # Get 5 most recent recipes
    serializer_class = RecipeSerializer


class InterestListCreate(generics.ListCreateAPIView):
    queryset = InterestedPerson.objects.all().order_by("-created_at")[
        :5
    ]  # Get 5 most recent interested people
    queryset = InterestedPerson.objects.all()
    serializer_class = NameSerializer

    def create(self, request, *args, **kwargs):
        name = request.data.get("name")
        email = request.data.get("email")

        if not name or not email:
            return Response(
                {"error": "Both name and email are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            interested_person = InterestedPerson.objects.create(name=name, email=email)
            serializer = self.get_serializer(interested_person)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
