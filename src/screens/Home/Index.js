import React, { useContext, useState} from 'react';
import { AuthContext } from '../../services/auth';
import { View, Text, TouchableOpacity } from 'react-native';
import stylesy from './style';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Feed from '../../componets/Feed';
import Profille from '../../componets/Profille';
import SignUp from '../../componets/SignUp';
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

    const [image, setImage] = useState(imgURI);

    const imgURI = (image);
  
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (result.cancelled) {
       setImage(result.uri)
      }
    };

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
         <TouchableOpacity style={styles('contimg')} onPress={pickImage}>
             <View style={styles('contphoto')}>
              {image && <Image source={{ uri: image }} style={styles('photo')}/>}
             </View>
         </TouchableOpacity>
         <View style={styles('contdata')}>
           
           <Text style={stylesy.textnametop}>{user.nome}</Text>
           <Text style={stylesy.textemail}>{user.email}</Text>
          
           <TouchableOpacity style={styles('btnmenusair')} onPress={signOut}> <Text style={stylesy.textebtn}>Sair</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btncadnew')}> <Text style={stylesy.textebtn}>Atualizar dados</Text></TouchableOpacity>
         </View>
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
           photo:{
            width:"100%",
            height:"100%",
            borderRadius:50,
        },
           contdata:{
               width:"80%",
               paddingLeft:12,
               height:100,
               justifyContent:'center'
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
          paddingLeft:5,
          height:100,
          justifyContent:'center'
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
  alignItems:'center',
  justifyContent:'center',
 },
 contdata:{
  width:"80%",
  paddingLeft:5,
  height:100,
  justifyContent:'center'
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
          alignItems:'center',
          justifyContent:'center',
         },
         contdata:{
          width:"90%",
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
     alignItems:'center',
     justifyContent:'center',
    },
    contdata:{
     width:"90%",
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