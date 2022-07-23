import React, { useContext, useState} from 'react';
import { AuthContext } from '../../services/auth';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
import { View, Text, Image , SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import stylesy from './style';


export default function Inglish() {
    const {user} = useContext(AuthContext);
    const { styles, deviceSize } = useStyles();
 return (
  <SafeAreaView style={styles('container')}>
       <View style={styles('contbasic')}>
       <Text style={{color:"#fff", fontSize:20, fontWeight:'bold', marginTop:8}}>Agendamento de aula</Text>
       <Text style={{color:"#fff", fontSize:14, fontWeight:'bold'}}>Lembrete:</Text>
       <Text style={{color:"#fff", fontSize:14, fontWeight:'bold'}}>Teste de nivel:</Text>
       <Text style={{color:"#fff", fontSize:14, fontWeight:'bold'}}>Numero de atividades:</Text>
          <View style={{width:100,height:100,position:'absolute', right:5, backgroundColor:'#000:rgba(0,0,0,0.1)',alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:'#fff:rgba(255,255,255,0.6)', fontSize:50, fontStyle:'normal', fontWeight:2}}>7.6</Text>
            <Text style={{color:"#fff", fontSize:14, fontWeight:'bold'}}>Meu nivel:</Text>
          </View>
      </View>

      <View style={styles('contbasica')}>
   
        <Image source={(require('../../../assets/QRCode.png'))} style={{width:200, height:200, position:'absolute',left:10}} />
        <Text>Teste seu Ingles</Text>
       </View>

        </SafeAreaView>
 
  );
}

const useStyles = CreateResponsiveStyle(
    {
        container:{
            flex:1,
            alignItems:'center',
            paddingTop:10,
        },
       
        contbasic:{
           width:"94%",
           height:"30%",
           borderLeftColor:"#C94D20",
           margin:1, 
           padding:10,
           borderTopRightRadius:12,
           borderTopLeftRadius:12,
           backgroundColor:'#eee:rgba(255,255,255,0.2)',
        },
        contbasica:{
            width:"94%",
            height:"65%",
            justifyContent:"center",
            borderLeftColor:"#C94D20",
            borderBottomLeftRadius:12,
            borderBottomRightRadius:12,
           
             margin:1,
             backgroundColor:'#eee:rgba(255,255,255,0.2)',
         },
        textdata:{
            color:"#fff"
        },
  
    },
  
    {
      [DEVICE_SIZES.SMALL_DEVICE]: {
        container:{
            flex:1,
            alignItems:'center',
            paddingTop:10
        },
  
      },
      [DEVICE_SIZES.MEDIUM_DEVICE]: {
        container:{
            flex:1,
            alignItems:'center',
            paddingTop:10
        },
     
      },
  
      [DEVICE_SIZES.LARGE_DEVICE]: {
        container:{
            flex:1,
            alignItems:'center',
            paddingTop:10
        },
      },
  
      [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
        container:{
            flex:1,
            alignItems:'center',
            paddingTop:10
        },
      },
    },
  )