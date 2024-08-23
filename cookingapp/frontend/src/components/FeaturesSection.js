import React, { useRef, useEffect } from "react";
import "./FeaturesSection.css";
import {
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAssistant,
  FcGlobe,
  FcInTransit,
  FcLike,
  FcCamera,
  FcReading,
  FcTimeline,
  FcPuzzle,
} from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <VStack
      align={"center"}
      justify={"center"}
      p={5}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"xl"}
      borderRadius={"xl"}
      w={"300px"}
      h={"300px"}
      flex={"none"}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={"lg"} mb={2}>
        {title}
      </Text>
      <Text textAlign={"center"} color={"gray.600"}>
        {text}
      </Text>
    </VStack>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: <Icon as={FcAssistant} w={10} h={10} />,
      title: "24/7 Support",
      text: "Get help from our community of cooks anytime, anywhere.",
    },
    {
      icon: <Icon as={FcGlobe} w={10} h={10} />,
      title: "Global Recipes",
      text: "Explore dishes from every corner of the world.",
    },
    {
      icon: <Icon as={FcInTransit} w={10} h={10} />,
      title: "Easy Sharing",
      text: "Share your recipes and cooking tips with just a few clicks.",
    },
    {
      icon: <Icon as={FcLike} w={10} h={10} />,
      title: "Personalized Recommendations",
      text: "Get recipe suggestions tailored to your tastes and preferences.",
    },
    {
      icon: <Icon as={FcCamera} w={10} h={10} />,
      title: "Visual Recipes",
      text: "Step-by-step photo and video guides for each recipe.",
    },
    {
      icon: <Icon as={FcReading} w={10} h={10} />,
      title: "Cooking Lessons",
      text: "Learn new techniques and skills from expert chefs.",
    },
    {
      icon: <Icon as={FcTimeline} w={10} h={10} />,
      title: "Meal Planning",
      text: "Plan your meals for the week with our easy-to-use tools.",
    },
    {
      icon: <Icon as={FcPuzzle} w={10} h={10} />,
      title: "Ingredient Substitutions",
      text: "Find suitable alternatives for ingredients you dont have on hand.",
    },
  ];

  return (
    <Box p={4} id="features" >
      <VStack spacing={8} as={Box} textAlign={"center"} mb={10}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Features that <br />
          <Text as={"span"} color={"#f15323"}>
            make cooking fun
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Discover all the amazing features that Kanga Cook offers to make your
          culinary journey exciting and hassle-free.
        </Text>
      </VStack>
      <Box position="relative" height="340px" overflow="hidden">
        <Flex
          className="scroll"
          position="absolute"
          height="100%"
          width="max-content"
        >
          {[...features, ...features].map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
