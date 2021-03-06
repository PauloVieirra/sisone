import React, { useContext, useState} from 'react';
import { AuthContext } from '../../services/auth';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
import { View, Text, ScrollView , SafeAreaView} from 'react-native';
import stylesy from './style';


export default function Profille() {
    const {user} = useContext(AuthContext);
    const { styles, deviceSize } = useStyles();
 return (
  <SafeAreaView style={styles('container')}>
    <ScrollView style={styles('envolve')}
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}
    >
          
          <View style={styles('containrow')}>

        <View style={styles('contlefft')}>

        <View style={styles('contbasica')}>
            
            <Text style={stylesy.textdata}>Nome:  {user.nome}</Text>
            <Text style={stylesy.textdata}>Sobrenome:  {user.sobrenome}</Text>
            <Text style={stylesy.textdata}>Nasci:  {user.ano}</Text>
            <Text style={stylesy.textdata}>Pai:  {user.nomepai}</Text>
            <Text style={stylesy.textdata}>Máe:  {user.nomemae}</Text>
      
     </View>
     <View style={styles('contbasica')}>
       
        <Text style={stylesy.textdata}>Estado:  {user.endereco}</Text>
        <Text style={stylesy.textdata}>Cidade:  {user.endereco}</Text>
        <Text style={stylesy.textdata}>Bairro:  {user.endereco}</Text>
     
    </View>
    


        </View>

        <View style={styles('contrigth')}>

        <View style={styles('contbasica')}>
            <Text style={stylesy.textdata}>Email:  {user.email}</Text>
            <Text style={stylesy.textdata}>Celular:  {user.telefone}</Text>
            <Text style={stylesy.textdata}>Telefone do Pai:  {user.telefonepai}</Text>
            <Text style={stylesy.textdata}>Telefone da Mãe:  {user.telefonemae}</Text>
            <Text style={stylesy.textdata}>Telefone de emergencia:  {user.telefoneemergencia}</Text>
            </View>
            <View style={styles('contbasica')}>
            <Text style={stylesy.textdata}>Estuda:  {user.estudos}</Text>
            <Text style={stylesy.textdata}>Serie ou curso:  {user.curso}</Text>
            <Text style={stylesy.textdata}>Nome da instituição:  {user.instnome}</Text>
            <Text style={stylesy.textdata}>Trabalha:  {user.profissional}</Text>
            </View>
            <View style={styles('contbasica')}>
            <Text style={stylesy.textdata}>Estatura: {user.estatura}</Text>
            <Text style={stylesy.textdata}>Joga basquete:  {user.pratic}</Text>
            <Text style={stylesy.textdata}>Quanto tempo:  {user.pratictime}</Text>
            </View>

            
        </View>

        </View>
            
         
            </ScrollView>
        </SafeAreaView>
 
  );
}

const useStyles = CreateResponsiveStyle(
    {
        container:{
            flex:1,
            alignItems:'center',
            paddingTop:10
        },
        envolve:{
            width:"90%", 
            height:"100%",
            
        },
        contbasica:{
           width:"90%",
           padding:5,
           paddingLeft:10,
           paddingTop:15,
           paddingBottom:15,
           margin:6,
           borderRadius:8,
           backgroundColor:'#eee:rgba(255,255,255,0.2)',
        },
        contbasicb:{
            width:"90%",
            padding:5,
            paddingLeft:10,
            paddingTop:15,
            paddingBottom:15,
            margin:6,
            borderRadius:8,
            backgroundColor:'#eee:rgba(255,255,255,0.2)',
         },
         contbasicc:{
            width:"90%",
            padding:5,
            paddingLeft:10,
            paddingTop:15,
            paddingBottom:15,
            margin:6,
            borderRadius:8,
            backgroundColor:'#eee:rgba(255,255,255,0.2)',
         },
         contbasicd:{
            width:"90%",
            padding:5,
            paddingLeft:10,
            paddingTop:15,
            paddingBottom:15,
            margin:6,
            borderRadius:8,
            backgroundColor:'#eee:rgba(255,255,255,0.2)',
         },
         contbasice:{
            width:"90%",
            padding:5,
            paddingLeft:10,
            paddingTop:15,
            paddingBottom:15,
            margin:6,
            borderRadius:8,
            backgroundColor:'#eee:rgba(255,255,255,0.2)',
         },
        contaddress:{
            width:"90%",
            padding:5,
            margin:2,
            backgroundColor:"#eee"
         },
        contright:{
            flex:1,
            paddingTop:12,
            paddingRight:20,
        },
        contdatasup:{
            width:"98%",
            height:"47%",
            margin:5,
            backgroundColor:"#343841"
        },
        contdatasub:{
            width:"98%",
            height:"47%",
            margin:5,
            backgroundColor:"#343841"
        },
        contdataleft:{
            margin:5,
            width:"98%",
            height:"22%",
            backgroundColor:"#343841",
         

        },
        textdata:{
            color:"#fff"
        },
  
    },
  
    {
      [DEVICE_SIZES.SMALL_DEVICE]: {
       container:{
         flex:1,
         backgroundColor:"#292C33"
     },
  
      },
      [DEVICE_SIZES.MEDIUM_DEVICE]: {
       container:{
         flex:1,
         backgroundColor:"#292C33"
     },
     
      },
  
      [DEVICE_SIZES.LARGE_DEVICE]: {
        container:{
            flex:1,
            alignItems:'center',
            paddingTop:10
        },
        containrow:{
            width:"100%",
            flexDirection:'row'
    
         },
        contlefft:{
            width:"50%",
            height:"100%"
        },
        contrigth:{
            width:"50%",
            height:"100%"
        },
        envolve:{
            width:"90%", 
            height:"100%",
            
        },
        contbasica:{
           width:"98%",
           padding:5,
           paddingLeft:10,
           paddingTop:15,
           paddingBottom:15,
           borderRadius:8,
           backgroundColor:'#eee:rgba(255,255,255,0.2)',
        },
        contaddress:{
            width:"90%",
            padding:5,
            margin:2,
            backgroundColor:"#eee"
         },
        contright:{
            flex:1,
            paddingTop:12,
            paddingRight:20,
        },
        contdatasup:{
            width:"98%",
            height:"47%",
            margin:5,
            backgroundColor:"#343841"
        },
        contdatasub:{
            width:"98%",
            height:"47%",
            margin:5,
            backgroundColor:"#343841"
        },
        contdataleft:{
            margin:5,
            width:"98%",
            height:"22%",
            backgroundColor:"#343841"
        },
        textdata:{
            color:"#fff"
        },
       
      },
  
      [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
        container:{
            flex:1,
            alignItems:'center',
            paddingTop:10
        },
        containrow:{
            width:"100%",
            flexDirection:'row'
    
         },
        contlefft:{
            width:"50%",
            height:"100%"
        },
        contrigth:{
            width:"50%",
            height:"100%"
        },
        envolve:{
            width:"90%", 
            height:"100%",
            
        },
        contbasica:{
           width:"98%",
           padding:5,
           paddingLeft:10,
           paddingTop:15,
           paddingBottom:15,
           borderRadius:8,
           backgroundColor:'#eee:rgba(255,255,255,0.2)',
        },
        contaddress:{
            width:"90%",
            padding:5,
            margin:2,
            backgroundColor:"#eee"
         },
        contright:{
            flex:1,
            paddingTop:12,
            paddingRight:20,
        },
        contdatasup:{
            width:"98%",
            height:"47%",
            margin:5,
            backgroundColor:"#343841"
        },
        contdatasub:{
            width:"98%",
            height:"47%",
            margin:5,
            backgroundColor:"#343841"
        },
        contdataleft:{
            margin:5,
            width:"98%",
            height:"22%",
            backgroundColor:"#343841"
        },
        textdata:{
            color:"#fff"
        },
      },
    },
  )