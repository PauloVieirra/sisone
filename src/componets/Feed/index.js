import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';


export default function Feed() {
 return (
    <View style={styles.container}>
    <View style={styles.contleft}>

        <View style={styles.contdatasup}>
            <Text style={styles.textdata}>Criar anucios, dotas de eventos, seletivas, vendas extras etc..</Text>
        </View>
    </View>
  
</View>
  );
}