// components/IdeasSection.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Textarea,
  Grid,
  Button,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { submitIdea, getIdeas } from "../services/api";

export default function IdeasSection() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = () => {
    getIdeas()
      .then((response) => {
        console.log("Fetched ideas:", response.data);
        setIdeas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ideas:", error);
        toast({
          title: "Error fetching ideas",
          description: `There was an error loading ideas: ${error.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleSubmitIdea = () => {
    if (newIdea.trim()) {
      submitIdea(newIdea)
        .then((response) => {
          console.log("Idea submitted successfully:", response.data);
          setNewIdea("");
          fetchIdeas(); // Refresh the ideas list
          toast({
            title: "Idea submitted!",
            description: "Thank you for sharing your idea.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((error) => {
          console.error("Error submitting idea:", error);
          toast({
            title: "Error submitting idea",
            description: `There was an error submitting your idea: ${error.message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  };

  return (
    <Box p={4} id="ideas" marginRight={"10%"} marginLeft={"10%"}>
      <VStack spacing={8} as={Box} textAlign={"center"}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"110%"}
        >
          Share Your Ideas
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.200")}>
          We'd love to hear your ideas for Kanga Cook. What features would you
          like to see?
        </Text>
        <Textarea
          value={newIdea}
          onChange={(e) => setNewIdea(e.target.value)}
          placeholder="Share your idea here..."
          size="lg"
        />
        <Button
          onClick={handleSubmitIdea}
          type="submit"
          colorScheme={"green"}
          bg={"#f15a29"}
          minWidth={100}
          marginTop={6}
          px={6}
          _hover={{
            bg: "#f15323",
          }}
        >
          Submit Idea
        </Button>
        {ideas.length > 0 && (
          <VStack spacing={4} align="stretch" width="100%">
            <Heading size="md">Submitted Ideas (5 most recent)</Heading>
            {ideas.map((submittedIdea, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="md">
                {submittedIdea.content}
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
}
