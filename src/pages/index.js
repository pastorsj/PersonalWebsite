import * as React from 'react';
import Layout from '../components/layout';
import Home from '../components/home';
import { system } from '../components/theme';
import { ChakraProvider } from '@chakra-ui/react';

const IndexPage = () => {
  return (
    <ChakraProvider value={system}>
      <Layout>
        <Home></Home>
      </Layout>
    </ChakraProvider>
  );
};

export default IndexPage;
