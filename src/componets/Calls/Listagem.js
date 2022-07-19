import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styled';




export default function Listagem({data}){
  const navigation = useNavigation();

  const handleopenplay =() => {
    navigation.navigate('Home',{
       key:data.key,
       nome:data.nome,
       cidade:data.cidade,
       estado:data.estado,
       email:data.email,
       telefone:data.telefone,
       ano:data.ano,
    });
  }
  

 return (
  <TouchableOpacity style={styles.viewplayer}>
   
  <View style={styles.viewpthow}>

      <View style={styles.viewpname}>
      <Text style={styles.textname}>{data.nome}</Text>
      <Text style={styles.textname}>{data.email}</Text>
      <Text style={styles.textname}>{data.cidade}</Text>
      <Text style={styles.textname}>{data.estado}</Text>
      <Text style={styles.textname}>{data.ano}</Text>
      <Text style={styles.textname}>{data.telefone}</Text>
      </View>

  </View>

</TouchableOpacity>
  );
}