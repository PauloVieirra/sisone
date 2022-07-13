import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
 return (
   <View>
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
       <Text>
        Pagina de Termos
    </Text>
    </TouchableOpacity>
   
   </View>
  );
}