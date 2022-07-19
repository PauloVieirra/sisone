import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/services/auth';
import firebase from 'firebase/app';

import Routes from './src/routes';

export default function App() {
  return (
   
    <NavigationContainer>
      <AuthProvider>
         <Routes/>
      </AuthProvider>
    </NavigationContainer> 
  );
}