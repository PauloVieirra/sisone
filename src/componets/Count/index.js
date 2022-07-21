import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

export default function Count() {
   
 return (
    <View style={styles.container}>
      <View style={styles.contnumber}>
      <Text style={{colo:"#fff", fontSize:20}}>38</Text>
      <Text style={{colo:"#fff", fontSize:13}}>Participante</Text>
      </View>
      <View style={styles.contnumber}>
      <Text style={{colo:"#fff", fontSize:20}}>25</Text>
      <Text style={{colo:"#fff", fontSize:13}}>Participante</Text>
      </View>
      <View style={styles.contnumber}>
      <Text style={{colo:"#fff", fontSize:20}}>25</Text>
      <Text style={{colo:"#fff", fontSize:13}}>Participante</Text>
      </View>
      <View style={styles.contnumber}>
      <Text style={{colo:"#fff", fontSize:20}}>25</Text>
      <Text style={{colo:"#fff", fontSize:13}}>Participante</Text>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        height:"100%",
        backgroundColor:"#658891"
 },
    contnumber:{
      width:"25%",
      height:"100%",
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#556699"
    }
})