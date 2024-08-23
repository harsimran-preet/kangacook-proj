import React from 'react';
import { Box, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react';

const Testimonial = ({ content, avatar, name, title }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.600", "gray.400")}
        // components/TestimonialsSection.js (continued)
        fontSize={"sm"}
      >
        {content}
      </Text>
      <Stack mt={8} direction={"row"} spacing={4} align={"center"}>
        <Avatar src={avatar} />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>{name}</Text>
          <Text color={useColorModeValue("gray.600", "gray.400")}>{title}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default function TestimonialsSection() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} py={16}>
      <Stack spacing={0} align={"center"}>
        <Heading>Our Community Love Us</Heading>
        <Text>Here's what they have to say about Kanga Cook</Text>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 4, lg: 10 }}
        align={"center"}
        justify={"center"}
        mt={16}
      >
        <Testimonial
          content={
            "Kanga Cook has revolutionized my cooking! I've discovered so many new recipes and techniques."
          }
          avatar="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          name={"Jane Cooper"}
          title={"Home Cook"}
        />
        <Testimonial
          content={
            "As a professional chef, I love sharing my recipes on Kanga Cook. The community is so supportive and creative!"
          }
          avatar="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          name={"John Doe"}
          title={"Professional Chef"}
        />
        <Testimonial
          content={
            "I've made so many friends through Kanga Cook. It's not just about recipes, it's about community!"
          }
          avatar="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          name={"Sarah Smith"}
          title={"Food Enthusiast"}
        />
      </Stack>
    </Box>
  );
}