import Reac, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";

const Index = ({ posts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [faId, setFaId] = useState();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [is_a, SetA] = useState(false);
  const [is_b, SetB] = useState(true);

  const handleChange = async (e) => {
    setFaId(e.target.value);
  };

  const Submit = () => {
    console.log(
      `https://emotion-damage-automation.herokuapp.com/api/v1/check_fa/${faId}`
    );
    axios
      .get(
        `https://emotion-damage-automation.herokuapp.com/api/v1/check_fa/${faId}`
      )
      .then(function (response) {
        setData(response.data);
        console.log(response);
        setIsVisible(true);
        SetA(false);
        SetB(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
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
        pb="1"
        textAlign="center"
      >
        Check Finite Automata
      </Text>
      <Center>
        <Box background="white" shadow="base" p={5}>
          <FormControl onSubmit={Submit}>
            <VStack>
              <Input
                onChange={handleChange}
                w="50vw"
                type="text"
                placeholder="Finite Automata id"
              />
              <Box h={3} />
              <Button
                backgroundColor="#1B196F"
                color="white"
                onClick={Submit}
                onSubmit={Submit}
              >
                Check
              </Button>
              ;
            </VStack>
          </FormControl>
        </Box>
      </Center>
      {isVisible && (
        <Modal onClose={is_a} isOpen={is_b}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Results</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{data.message}</ModalBody>
            <ModalFooter>
              <Button
                backgroundColor="#1B196F"
                color="white"
                onClick={() => {
                  SetA(true), SetB(false), setIsVisible(false);
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </VStack>
  );
};

export default Index;
