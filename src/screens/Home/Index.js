import React, { useContext, useState} from 'react';
import { AuthContext } from '../../services/auth';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import stylesy from './style';
import { useNavigation } from '@react-navigation/native';
import Feed from '../../componets/Feed';
import Profille from '../../componets/Profille';
import SignUp from '../../componets/SignUp';
import Toppro from '../../componets/Toppro';
import Motoristas from '../../componets/Calls/Motoristas'
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';

export default function Home() {
    const navigation = useNavigation();
    const { styles, deviceSize } = useStyles();
    const {signOut, user} = useContext(AuthContext);
     console.log(user);
    const [tipo, setTipo] = useState('');
    const [cad,setCad] = useState('');
    const [call,setCall] = useState('');
    const [feed,setFeed] = useState('true');

   
   

   
    const handlefeed = () => {
      setFeed('true');
      setCad('');
      setCall('');
     }

    const handlecad = () => {
     setCall('');
     setFeed('');
     setCad('cad');
    }
    const handlecall = () => {
     setFeed('');
     setCad('');
     setCall('call');
    }


 return (
   <View style={styles('container')}>

    <View style={styles ('containsup')}>
        
              <Toppro/>
        
        
    </View>
    {!user.tipo && 
    <View style={styles('contmenu')}>
           <TouchableOpacity style={styles('btnmenu')}> <Text style={stylesy.textmenu}>Perfil</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')}> <Text style={stylesy.textmenu}>Ingles</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')}> <Text style={stylesy.textmenu}>Finanças</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')}> <Text style={stylesy.textmenu}>Educação</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')}> <Text style={stylesy.textmenu}>Visto</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')}> <Text style={stylesy.textmenu}>Passaporte</Text></TouchableOpacity>
    </View>
    }

     {user && user.tipo &&
     <View style={styles('contmenu')}>
               <TouchableOpacity style={styles('btnmenu')} onPress={handlefeed}> <Text style={stylesy.textmenu}>Feed</Text></TouchableOpacity>
               <TouchableOpacity style={styles('btnmenu')} onPress={handlecall}> <Text style={stylesy.textmenu}>Chamados</Text></TouchableOpacity>
               <TouchableOpacity style={styles('btnmenu')} onPress={handlecad}> <Text style={stylesy.textmenu}>Cadastrar</Text></TouchableOpacity>
     </View>
     }
    

    <View style={styles('containsub')}>

         
        
         {!user.tipo && 
          <Profille/>
         }
         {user.tipo && feed &&
          <Feed/>
         }
         
         {user.tipo && cad &&
         <SignUp/>
         }
         
         {user.tipo && call &&
         <Motoristas/>
         }
         

    </View>
    
   </View>
  );
  
        }

const useStyles = CreateResponsiveStyle(
     {
          container:{
               flex:1,
               backgroundColor:"#292C33"
           },
       
           containsup:{
               width:"100%",
               height:"20%",
               flexDirection:'row',
               alignItems:'center',
               paddingLeft:20,
               paddingRight:20,
           },
           contimg:{
               width:"20%",
               height:"80%",
               alignItems:'center',
               justifyContent:'center',
           },
           contphoto:{
               width:80,
               height:80,
               borderRadius:50,
           },
           thumbnail: {
            width: 300,
            height: 300,
            resizeMode: 'contain',
          },
           photo:{
            width:80,
            height:80,
            resizeMode: "stretch",
            borderRadius:50,
        },
        contdata:{
          width:"80%",
          marginLeft:12,
          height:100,
          justifyContent:'center',
      },
           contmenu:{
               width:"100%",
               height:"5%",
               paddingLeft:20,
               backgroundColor:"#1D1E21",
               flexDirection:'row',
       
           },
           btnmenu:{
               width:70,
               height:"100%",
               alignItems:'center',
               justifyContent:'center',
           },
           btnmenusair:{
               width:100,
               height:"100%",
               position:'absolute',
               top:75,
               left:"90%"
           },
           btncadnew:{
               width:100,
               height:35,
               position:'absolute',
               top:75,
               left:"3%"
           },
           textmenu:{
               color:"#fff"
           },
           containsub:{
               width:"100%",
               height:"75%",
           },
           
   
     },
   
     {
       [DEVICE_SIZES.SMALL_DEVICE]: {
       container:{
               flex:1,
               backgroundColor:"#292C33"
           },
         containsup:{
          width:"100%",
          height:"20%",
          flexDirection:'row',
          alignItems:'center',
          paddingLeft:20,
          paddingRight:20,
      },
      contphoto:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:"#eee",
    },
         contimg:{
          width:"16%",
          height:"80%",
          alignItems:'center',
          justifyContent:'center',
         },
         contdata:{
          width:"80%",
          marginLeft:12,
          height:100,
          justifyContent:'center',
      },
      btncadnew:{
        width:100,
        height:35,
        position:'absolute',
        top:75,
        left:5
    },
      btnmenusair:{
          width:100,
          height:"100%",
          position:'absolute',
          top:75,
          left:"96%"
      },
   
       },
       [DEVICE_SIZES.MEDIUM_DEVICE]: {
        container:{
          flex:1,
          backgroundColor:"#292C33"
      },
    containsup:{
     width:"100%",
     height:"20%",
     flexDirection:'row',
     alignItems:'center',
     paddingLeft:20,
     paddingRight:20,
 },
 contimg:{
  width:"12%",
  height:"80%",
  marginLeft:15,
  alignItems:'center',
  justifyContent:'center',
 },
 contdata:{
  width:"80%",
  marginLeft:12,
  height:100,
  justifyContent:'center',
},
 btncadnew:{
   width:100,
   height:35,
   position:'absolute',
   top:75,
   left:6
},
 btnmenusair:{
     width:100,
     height:"100%",
     position:'absolute',
     top:75,
     left:"96%"
 },
       },
   
       [DEVICE_SIZES.LARGE_DEVICE]: {
          container:{
               flex:1,
               backgroundColor:"#292C33"
           },
         containsup:{
          width:"100%",
          height:"20%",
          flexDirection:'row',
          alignItems:'center',
          paddingLeft:20,
          paddingRight:20,
      },
         contimg:{
          width:"8%",
          height:"80%",
          marginLeft:30,
          alignItems:'center',
          justifyContent:'center',
         },
         contdata:{
          width:"80%",
          marginLeft:12,
          height:100,
          justifyContent:'center',
      },
      btncadnew:{
        width:100,
        height:35,
        position:'absolute',
        top:75,
        left:10
    },
      btnmenusair:{
          width:100,
          height:"100%",
          position:'absolute',
          top:75,
          left:"96%"
      },
       },
   
       [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
        container:{
          flex:1,
          backgroundColor:"#292C33"
      },
    containsup:{
     width:"100%",
     height:"20%",
     flexDirection:'row',
     alignItems:'center',
     paddingLeft:20,
     paddingRight:20,
 },
    contimg:{
     width:"8%",
     height:"80%",
     marginLeft:40,
     alignItems:'center',
     justifyContent:'center',
    },
    contdata:{
     width:"80%",
     marginLeft:12,
     height:100,
     justifyContent:'center',
 },
 btncadnew:{
   width:100,
   height:35,
   position:'absolute',
   top:75,
   left:10
},
 btnmenusair:{
     width:100,
     height:"100%",
     position:'absolute',
     top:75,
     left:"96%"
 },
       },
     },
   )