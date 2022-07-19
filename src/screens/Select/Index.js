import React, {useState, useContext} from 'react';
import { AuthContext } from '../../services/auth';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';

export default function Select() {
    
    const navigation = useNavigation();
    const { styles, deviceSize } = useStyles();
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [ano, setAno] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    const {cadAmigao} = useContext(AuthContext);
  
    function handleCad(){
      cadAmigao(email,nome,ano,telefone,estado,cidade);
    }
 return (
  
   <View style={styles('container')}>
      

              <View style={styles('contimg')}>
                    <Image source={require('../../../assets/plushunter.png')} style={styles('img')}/>
              </View>

         <View style={styles('campoa')}>
               <TextInput style={styles('Input')}
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
               />

               <TextInput style={styles('Input')}
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="none"
                value={nome}
                onChangeText={(text) => setNome(text)}
               />
         </View>

         <View style={styles('campob')}>

         <TextInput style={styles('Input')}
                placeholder="Ano nascimento"
                autoCorrect={false}
                autoCapitalize="none"
                value={ano}
                onChangeText={(text) => setAno(text)}
               />
               <TextInput style={styles('Input')}
                placeholder="Telefone"
                autoCorrect={false}
                autoCapitalize="none"
                value={telefone}
                onChangeText={(text) => setTelefone(text)}
               />
               <TextInput style={styles('Input')}
                placeholder="Estado"
                autoCorrect={false}
                autoCapitalize="none"
                value={estado}
                onChangeText={(text) => setEstado(text)}
               />
               <TextInput style={styles('Input')}
                placeholder="Cidade"
                autoCorrect={false}
                autoCapitalize="none"
                value={cidade}
                onChangeText={(text) => setCidade(text)}
               />
         </View>
               
               
             
               
              <TouchableOpacity style={styles('btnseletiva')} onPress={handleCad}><Text>Me inscrever</Text></TouchableOpacity>
              
         </View>
 
    
  

  );
}

const useStyles = CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      backgroundColor:"#292C33",
      alignItems: 'center',
    },
    text: {
      fontSize: 30,
      color: 'white',
    },
    contimg:{
      width:200,
      height:90,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:80,
      marginTop:80
    },
    img:{
      width:200,
      height:90,
      resizeMode:'cover',
     
   },
    contright:{
      alignItems:'center',
      width:"100%",
      height:"100%",
      backgroundColor:"#292C33"
    },
    contlogin:{
      width:"90%",
      height:"40%",
      borderRadius:12,
      alignItems:'center',
      justifyContent:'center',
      //backgroundColor:'#fff:rgba(255,255,255,1.0)',
  },
  Input:{
    width:"90%",
    height:50,
    marginTop:20,
    outline: false,
    borderWidth:0,
    outlineWidth: 0,
    borderStyle:'none',
    outline:0,
    borderRadius:8,
    borderColor:'#fff:rgba(0,0,0,0.6)',
    backgroundColor:'#fff:rgba(255,255,255,1.0)',
    alignItems:'center',
    paddingLeft:10,
},
  btnlogin:{
    width:"90%",
    height:60,
    borderRadius:10,
    marginTop:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#ff6847",
},
  btnseletiva:{
      width:"90%",
      height:60,
      borderRadius:10,
      marginTop:30,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#ff6847",
  },
  campoa:{
      width:"100%",
      alignItems:'center'
  },
  campob:{
    width:"100%",
    alignItems:'center'
  },

  },

  {
    [DEVICE_SIZES.SMALL_DEVICE]: {
      container: {
        flex: 1,
        backgroundColor:"#292C33",
        alignItems: 'center',
      },
      contright:{
        alignItems:'center',
        justifyContent:'center',
        width:"100%",
        height:"100%",
        backgroundColor:"#292C33"
      },
      contlogin:{
        width:"60%",
        height:"40%",
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'#fff:rgba(255,255,255,1.0)',
    },

    },
    [DEVICE_SIZES.MEDIUM_DEVICE]: {
      container: {
        backgroundColor:"#292C33",
      },
      contright:{
        alignItems:'center',
        justifyContent:'center',
        width:"100%",
        height:"100%",
        backgroundColor:"#292C33"
      },
      contlogin:{
        width:"60%",
        height:"40%",
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'#fff:rgba(255,255,255,1.0)',
    },

    },

    [DEVICE_SIZES.LARGE_DEVICE]: {
      container: {
        backgroundColor:"#292C33",
      },
      campoa:{
        flexDirection:'row',
        width:"80%",
        justifyContent:'space-around'
    },
    campob:{
      flexDirection:'row',
      width:"80%",
      justifyContent:'space-around'
    },

    Input:{
      width:"50%",
      height:50,
      marginTop:20,
      outline: false,
      borderWidth:0,
      outlineWidth: 0,
      borderStyle:'none',
      outline:0,
      borderRadius:8,
      borderColor:'#fff:rgba(0,0,0,0.6)',
      backgroundColor:'#fff:rgba(255,255,255,1.0)',
      alignItems:'center',
      margin:10
  },

  btnseletiva:{
    width:"20%",
    height:50,
    borderRadius:10,
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#ff6847",
},



    
    },

    [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
      container: {
        backgroundColor:"#292C33",
      },
    },
  },
)