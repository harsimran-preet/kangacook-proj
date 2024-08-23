import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Stack,
  Image,
  Icon,
  useColorModeValue,
  createIcon,
  useToast,
} from "@chakra-ui/react";
import logo from "../assets/kanga-cook-logo.png";
import { submitName, getNames } from "../services/api";

export default function HeroSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interestedPeople, setInterestedPeople] = useState([]);
  const scrollRef = useRef(null);
  const toast = useToast();

  const fetchNames = () => {
    getNames()
      .then((response) => {
        console.log("Fetched ideas:", response.data);
        setInterestedPeople(response.data);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      submitName({ name, email })
        .then(() => {
          setInterestedPeople([...interestedPeople, name]);
          setName("");
          setEmail("");

          toast({
            title: "Interest registered",
            description: "We've added your name to the list!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((error) => {
          console.error("Error submitting name:", error);
          toast({
            title: "Error",
            description:
              "There was an error registering your info. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      let scrollPosition = 0;

      const scroll = () => {
        scrollPosition += 1;
        if (scrollPosition > scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    }
  }, [interestedPeople]);

  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Image src={logo} alt="Kanga Cook Logo" />
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Share your cooking ideas <br />
          <Text as={"span"} color={"#f15323"}>
            with Kanga Cook
          </Text>
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.200")}>
          Explore recipes from all over the world, share your culinary
          creations, and enjoy the pleasure of cooking and sharing with a global
          community of food enthusiasts.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"#f15a29"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "#f15323",
            }}
          >
            Get Started
          </Button>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
          <Box>
            <Icon
              as={Arrow}
              color={useColorModeValue("gray.800", "gray.300")}
              w={71}
              position={"absolute"}
              right={-71}
              top={"10px"}
            />
            <Text
              fontSize={"lg"}
              fontFamily={"Caveat"}
              position={"absolute"}
              right={"-125px"}
              top={"-15px"}
              transform={"rotate(10deg)"}
            >
              Start cooking today!
            </Text>
          </Box>
        </Stack>
      </Stack>

      <HStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Your Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button
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
          Sign Up
        </Button>
      </HStack>
      <Text color={useColorModeValue("gray.800", "gray.200")} marginTop={5}>
        Join our community of food enthusiasts and be one of the first to know
        when our app launches!
      </Text>

      <Box
        ref={scrollRef}
        overflow="hidden"
        whiteSpace="nowrap"
        mt={4}
        height="30px"
      >
        <Text as="span" animation="scroll 20s linear infinite">
          {interestedPeople.map((name, index) => (
            <span key={index} style={{ marginRight: "20px" }}>
              Thank you for Joining: {name}
            </span>
          ))}
        </Text>
      </Box>
    </Container>
  );
}

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
