import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

const Index = () => {
  const toast = useToast();
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
        Convert NFA to DFA
      </Text>
      <Center>
        <Box background="white" shadow="base" p={5}>
          <FormControl>
            <VStack>
              <Text size="25px" fontWeight="700">
                Convert the Nondeterministic Finite Automaton (NFA) to
                Deterministic Finite Automaton (DFA)
              </Text>
              <Box h={3} />
              <Input w="50vw" type="text" placeholder="Finite Automata id" />
              <Box h={3} />
              <Button
                backgroundColor="#1B196F"
                color="white"
                type="submit"
                onClick={() => {
                  toast({
                    title: "Success",
                    // description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
              >
                Check
              </Button>
            </VStack>
          </FormControl>
        </Box>
      </Center>
    </VStack>
  );
};

export default Index;
