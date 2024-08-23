import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PopularRecipesSection from "./components/PopularRecipesSection";
import IdeasSection from "./components/IdeasSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import ShowcaseSection from "./components/ShowcaseSection";
export default function LandingPage() {
  return (
    <Box>
      <Header />
      <VStack spacing={20} align="stretch">
        <HeroSection />
        <FeaturesSection />
        <PopularRecipesSection />
        <IdeasSection />

        <TestimonialsSection />
        <ShowcaseSection />
      </VStack>
      <Footer />
    </Box>
  );
}
