import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/constants/themes";
import Layout from "../components/layouts";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
