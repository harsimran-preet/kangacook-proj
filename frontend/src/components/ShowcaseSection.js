import {
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import profilepic from "../assets/harsimran.jpg";
const ShowcaseSection = () => {
  const bg = useColorModeValue("white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Box as="section" py={10} bg={bg} px={5} textAlign="center">
      <VStack spacing={4}>
        <Heading as="h6" size="xl" color={headingColor}>
          About the Developer
        </Heading>
        <Avatar size="2xl" name="Your Name" src={profilepic} mb={4} />

        <Heading as="h2" size="" color={headingColor}>
          Harsimran Preet Singh
        </Heading>

        <Text fontSize="lg" color={textColor}>
          Software Engineer
        </Text>

        <HStack spacing={4} mt={6}>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() =>
              window.open("https://bit.ly/hpsinghResume", "_blank")
            }
          >
            View Resume
          </Button>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={() =>
              window.open("https://bit.ly/hpsinghLinkedin", "_blank")
            }
          >
            LinkedIn Profile
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ShowcaseSection;
