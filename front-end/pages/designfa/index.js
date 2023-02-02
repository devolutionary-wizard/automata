import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack>
      <Text
        // backgroundColor="#1B196E"
        color="#1B196E"
        fontSize={30}
        w="100vw"
        fontWeight="700"
        pt="1"
        pb="1"
        textAlign="center"
      >
        Design Finite Automata
      </Text>
      <Box background="white" shadow="base" p={5}>
        <FormControl>
          <VStack>
            <Box h={3} />
            <Box>
              <FormLabel fontWeight="bold" color="#1B196F">
                Set Symbol
              </FormLabel>
              <Input w="50vw" type="text" placeholder="Symbol" />
            </Box>
            <Box h={3} />
            <Button backgroundColor="#1B196F" color="white" type="submit">
              Set
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </VStack>
  );
};

export default Index;
