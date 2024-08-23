import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import LandingPage from "./LandingPage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>

          <VStack spacing={8}>
            <LandingPage />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
