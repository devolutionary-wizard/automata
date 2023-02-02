import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
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
      >
        <Center>Minimize Deterministic Finite Automaton </Center>
      </Text>
      <Center>
        <Box background="white" shadow="base" p={5}>
          <FormControl>
            <VStack>
              <Text size="25px" fontWeight="700">
                Minimize the Deterministic Finite Automaton (DFA)
              </Text>
              <Box h={3} />
              <Input w="50vw" type="text" placeholder="Finite Automata id" />
              <Box h={3} />
              <Button backgroundColor="#1B196F" color="white" type="submit">
                Minimize
              </Button>
            </VStack>
          </FormControl>
        </Box>
      </Center>
    </VStack>
  );
};

export default Index;
