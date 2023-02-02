import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const Index = () => {
  const toast = useToast();
  const [data, setData] = useState({
    fa_id: "",
    string: "",
  });
  const [faId, setFaId] = useState();
  const [string, setString] = useState();
  // const handleChange = async (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setData({ ...data });
  //   console.log(...data);
  // };
  const handleSubmit = async (e) => {
    const acceptData = {
      fa_id: faId,
      string: string,
    };
    console.log(acceptData);
    axios
      .post(
        "https://emotion-damage-automation.herokuapp.com/api/v1/accept_string",
        acceptData
      )
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === "Accepted") {
          toast({
            title: "String Accepted!",
            // description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else if (response.data.message === "Rejected") {
          toast({
            title: "String Rejected",
            // description: "We've created your account for you.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else if (response.data.message === "String is not included!") {
          toast({
            title: "String is not included in the FA!",
            // description: "We've created your account for you.",
            status: "info",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Not Found",
            // description: "We've created your account for you.",
            status: "warning",
            duration: 9000,
            isClosable: true,
          });
        }
        console.log(response);
      });
  };
  return (
    <VStack>
      <Text
        // backgroundColor="#1B196E"
        color="#1B196E"
        fontSize={30}
        w="100vw"
        fontWeight="700"
        pt="1"
        textAlign="center"
        pb="1"
      >
        Accept String
      </Text>
      <Center>
        <Box background="white" shadow="base" p={5}>
          <FormControl onSubmit={handleSubmit}>
            <VStack>
              <Text size="25px" fontWeight="700">
                Check String if Accepted or Rejected by the Finite Automata
              </Text>
              <Box h={3} />
              <Input
                type="text"
                w="50vw"
                id="fa_id"
                onChange={(e) => {
                  setFaId(e.target.value);
                }}
                placeholder="Finite Automata"
              />
              <Box h={3} />
              <Input
                w="50vw"
                id="string"
                onChange={(e) => {
                  setString(e.target.value);
                }}
                type="text"
                placeholder="String"
              />
              <Box h={3} />
              <Button
                backgroundColor="#1B196F"
                color="white"
                type="submit"
                onClick={handleSubmit}
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
