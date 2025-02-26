/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import Home from './src/screens/Home';


const App: () => Node = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
    </QueryClientProvider>
  );
};

export default App;
