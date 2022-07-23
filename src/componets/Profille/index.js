import React, { useContext, useState} from 'react';
import { AuthContext } from '../../services/auth';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
import { View, Text, ScrollView , SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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
            
            <Text style={stylesy.textdata}>Idade:  {user.ano}</Text>
            <Text style={stylesy.textdata}>Altura:  {user.estatura}</Text>
            <Text style={stylesy.textdata}>Peso:  {user.peso}</Text>
            <Text style={stylesy.textdata}>Posicao:  {user.posicao}</Text>
      
     </View>
     <View style={styles('contbasica')}>
        <View style={styles('envolvemenu')}>
           <View style={styles('menutext')}>
                <Text style={stylesy.textdata}>Meus videos</Text>
             </View>
             <View style={styles('menuint')}>
                <AntDesign name="down" size={20} color="white"/>
            </View>
        </View>
    </View>

    <View style={styles('contbasica')}>
    <View style={styles('envolvemenu')}>
           <View style={styles('menutext')}>
                <Text style={stylesy.textdata}>Historico Escolar</Text>
             </View>
             <View style={styles('menuint')}>
                <AntDesign name="down" size={20} color="white"/>
            </View>
        </View>
    </View>

    <View style={styles('contbasica')}>
    <View style={styles('envolvemenu')}>
           <View style={styles('menutext')}>
                <Text style={stylesy.textdata}>Nivel de ingles</Text>
             </View>
             <View style={styles('menuint')}>
                <AntDesign name="down" size={20} color="white"/>
            </View>
        </View>
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
            width:"100%", 
            height:"100%",
            marginLeft:25,
        },
        envolvemenu:{
            width:"100%", 
            height:40,
            padding:5,
            flexDirection:'row',
        },
        menutext:{
            width:"50%",
            height:40,
        },
        menuint:{
            flexDirection:'row-reverse',
            width:"50%",
            height:40,
        },
        contbasica:{
           width:"92%",
           padding:5,
           paddingLeft:10,
           paddingTop:15,
           paddingBottom:15,
           borderLeftWidth:3,
           borderLeftColor:"#C94D20",
           margin:6,
           borderRadius:8,
           backgroundColor:'#eee:rgba(255,255,255,0.2)',
        },
        contbasicb:{
            width:"92%",
            height:"97%",
            padding:5,
            paddingLeft:5,
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
            width:"100%",
            height:"100%"
        },
        contrigth:{
            width:"100%",
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