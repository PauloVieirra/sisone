import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
 return (
   <View>
    <TouchableOpacity onPress={() => navigation.navigate('Termos')}>
       <Text>
        Pagina de cadastro
    </Text>
    </TouchableOpacity>
   
   </View>
  );
}