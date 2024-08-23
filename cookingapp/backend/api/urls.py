from django.urls import path
from .views import RecipeListCreate, IdeaListCreate, PopularRecipes, InterestListCreate

urlpatterns = [
    path("recipes/", RecipeListCreate.as_view(), name="recipe-list-create"),
    path("ideas/", IdeaListCreate.as_view(), name="idea-list-create"),
    path("interest/", InterestListCreate.as_view(), name="interest-list-create"),
    path("popular-recipes/", PopularRecipes.as_view(), name="popular-recipes"),
]
