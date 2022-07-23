import React, {useState, useContext} from 'react';
import { AuthContext } from '../../services/auth';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';

export default function SignIn() {
    
    const navigation = useNavigation();
    const { styles, deviceSize } = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn} = useContext(AuthContext);
  
    function handleLogin(){
      signIn(email, password);
    }
 return (
  <>
   <View style={styles('container')}>
     <View style={styles('contright')}>

              <View style={styles('contimg')}>
                    <Image source={require('../../../assets/plushunter.png')} style={styles('img')}/>
              </View>

         <View style={styles('contlogin')}>
               
               <TextInput style={styles('Input')}
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
               />

               <TextInput style={styles('Input')}
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
               />
               
              <TouchableOpacity style={styles('btnlogin')} onPress={handleLogin}><Text style={{color:"#fff"}}>Login</Text></TouchableOpacity>
              <View style={styles('contbarr')}>
                <TouchableOpacity style={styles('btnrecovery')}><Text  style={{color:"#000"}}>Recuperar minha conta</Text></TouchableOpacity>
                <TouchableOpacity style={styles('btnrecovery')}onPress={() => navigation.navigate ("Preloader")}><Text  style={{color:"#000"}}>Seletiva</Text></TouchableOpacity>
              </View>
              
               </View>
     </View>
    
   </View>
   </>
  );
}

const useStyles = CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
      marginBottom:80
    },
    img:{
      width:180,
      height:90,
      resizeMode:'cover',
     
   },

    contright:{
      alignItems:'center',
      justifyContent:'center',
      width:"100%",
      height:"100%",
      backgroundColor:"#292C33"
    },
    contlogin:{
      width:"90%",
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
    justifyContent:'center',
},
  btnlogin:{
    width:"90%",
    height:50,
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
  btnrecovery:{
    height:50,
    justifyContent:'center',
    alignItems:'center',
    margin:10
  },
  contbarr:{
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'space-around',
    height:60,

  }

  },

  {
    [DEVICE_SIZES.SMALL_DEVICE]: {
      container: {
        backgroundColor: 'blue',
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
        backgroundColor: 'green',
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
        backgroundColor: 'black',
      },
      contright:{
        alignItems:'center',
        justifyContent:'center',
        width:"100%",
        height:"100%",
        backgroundColor:"#292C33"
      },
      contlogin:{
        width:"30%",
        height:"50%",
        borderRadius:12,
        position:'absolute',
        backgroundColor:"#eee",
        right:"35%",
        alignItems:'center',
        justifyContent:'center',
    },
    contimg:{
      width:100,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:10,
      left:10
    },
    img:{
      width:100,
      height:50,
      resizeMode:'cover',
     
   },
    },

    [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
      container: {
        backgroundColor: 'black',
      },
      contright:{
        alignItems:'center',
        justifyContent:'center',
        width:"100%",
        height:"100%",
        backgroundColor:"#292C33"
      },
      contlogin:{
        width:"30%",
        height:"50%",
        borderRadius:12,
        position:'absolute',right:50,
        alignItems:'center',
        justifyContent:'center',
    },
    contimg:{
      width:100,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:10,
      left:10
    },
    img:{
      width:100,
      height:50,
      resizeMode:'cover',
     
   },
    },
  },
)