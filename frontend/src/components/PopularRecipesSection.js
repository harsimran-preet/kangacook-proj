import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
} from "@chakra-ui/react";
import { MdHeight } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { getPopularRecipes } from "../services/api";

const RecipeCard = ({ title, image, description }) => {
  return (
    <Box borderWidth="3px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />
      <Box p="6">
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default function PopularRecipesSection() {
  const recipes = [
    {
      title: "Spaghetti Carbonara",
      image:
        "https://images.services.kitchenstories.io/6glN_4JhpVS9aUiBS7JnGsuDULA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg",
      description:
        "Classic Italian pasta dish with eggs, cheese, and pancetta.",
    },
    {
      title: "Chicken Tikka Masala",
      image:
        "https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg",
      description: "Creamy and spicy Indian curry with tender chicken pieces.",
    },
    {
      title: "Fried Rice",
      image:
        "https://www.seriouseats.com/thmb/BJjCEDw9OZe95hpZxmNcD3rJnHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg",
      description:
        "Traditional Chinese rice dish with vegetables, protein, soy sauce, and aromatics",
    },
  ];
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   getPopularRecipes()
  //     .then((response) => {
  //       setRecipes(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching recipes:", error);
  //     });
  // }, []);

  return (
    <Box p={4} id="recipes">
      <VStack spacing={8}>
        <Heading>Popular Recipes</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxWidth={"80%"}>
          <RecipeCard
            title={recipes[0].title}
            image={recipes[0].image}
            description={recipes[0].description}
          />
          <RecipeCard
            title={recipes[1].title}
            image={recipes[1].image}
            description={recipes[1].description}
          />
          <RecipeCard
            title={recipes[2].title}
            image={recipes[2].image}
            description={recipes[2].description}
          />
        </SimpleGrid>
        {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxWidth={"80%"}>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </SimpleGrid> */}
      </VStack>
    </Box>
  );
}
