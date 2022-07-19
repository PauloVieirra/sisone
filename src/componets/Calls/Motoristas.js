import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import firebase from '../../services/firebaseConnection';
import Listagem from './Listagem';



export default function components() {

    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {

        async function dados(){

          await firebase.database().ref('seletiva').on('value', (snapshot)=> {
            
            setChamados([]);
            
            snapshot.forEach((chilItem) => {
              let data = {
                key: chilItem.key,
                nome: chilItem.val().nome,
                ano: chilItem.val().ano,
                email: chilItem.val().email,
                estado: chilItem.val().estado,
                telefone: chilItem.val().telefone,
              };

              setChamados(oldArray => [...oldArray, data]);
             
            })

          })

        }

        dados();
        
      }, []);
    
 return (
    <View style={styles.container}>
  
        <FlatList
                    keyExtractor={item => item.key}
                    data={chamados}
                    renderItem={ ({item}) => ( <Listagem data={item} /> )  }
                    />
        </View>
  );
}

const styles = StyleSheet.create({
   container:{
    width:"96%",
    height:"100%",
    padding:2, 
    margin:6,
   },
   containImg:{
       width:90,
       height:90,
       borderRadius:22,
       backgroundColor:"#eee"
   },
   containInfo:{
       marginLeft:5,
       borderRadius:22,
       backgroundColor:"#eee"
   }
});