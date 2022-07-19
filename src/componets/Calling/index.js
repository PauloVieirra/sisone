import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';


export default function Calling() {
 return (
  <View style={styles.container}>
        <View style={styles.contleft}>

            <View style={styles.contdatasup}>
                <Text style={styles.textdata}>Lista de chamados feitos por alunos</Text>
            </View>
        </View>
      
  </View>
  );
}