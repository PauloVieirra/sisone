import React, { useContext, useState} from 'react';
import { AuthContext } from '../../services/auth';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import stylesy from './style';
import { useNavigation } from '@react-navigation/native';
import Feed from '../../componets/Feed';
import Profille from '../../componets/Profille';
import SignUp from '../../componets/SignUp';
import Toppro from '../../componets/Toppro';
import Inglish from '../../componets/Inglish';
import Financials from '../../componets/Financials';
import Motoristas from '../../componets/Calls/Motoristas'
import Study from '../../componets/Study';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
    const navigation = useNavigation();
    const { styles, deviceSize } = useStyles();
    const {signOut, user} = useContext(AuthContext);
     console.log(user);
    const [tipo, setTipo] = useState('');
    const [cad,setCad] = useState('');
    const [call,setCall] = useState('');
    const [feed,setFeed] = useState('true');
    const [inglis, setInglis] = useState('');
    const [finacis, setFinancis] = useState('');
    const [study, setStudy] = useState('');

   
   

   
    const handlefeed = () => {
        setFinancis('');
        setInglis('');
        setCall('');
        setCad('');
        setStudy('');
        setFeed('true');
     }

    const handlecad = () => {
        setFeed('');
        setFinancis('');
        setInglis('');
        setCall('');
        setStudy('');
        setCad('true');
    }
    const handlecall = () => {
        setFeed('');
        setCad('');
        setFinancis('');
        setInglis('');
        setStudy('');
        setCall('true');
    }
    const handleing = () => {
        setFeed('');
        setCad('');
        setCall('');
        setFinancis('');
        setStudy('');
        setInglis('true');
       }
       const handlefinan = () => {
        setFeed('');
        setCad('');
        setCall('');
        setInglis('');
        setStudy('');
        setFinancis('true');
       }
       const handlestud = () => {
        setFeed('');
        setCad('');
        setCall('');
        setInglis('');
        setFinancis('');
        setStudy('true');
       }


 return (
   <View style={styles('container')}>

     
    <View style={styles ('containsup')}> 
   
              <Toppro/>
    </View>
    {!user.tipo && 
    <View style={styles('contmenu')}>
           <TouchableOpacity style={styles('btnmenu')}> <Text style={stylesy.textmenu}>Perfil</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')} onPress={handleing} > <Text style={stylesy.textmenu}>Ingles</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')} onPress={handlefinan}> <Text style={stylesy.textmenu}>Finanças</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')} onPress={handlestud}> <Text style={stylesy.textmenu}>Educação</Text></TouchableOpacity>
           <TouchableOpacity style={styles('btnmenu')}> <Text style={stylesy.textmenu}>Visto</Text></TouchableOpacity>
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
         <View style={styles('banner')}>
         <View style={styles('bannerin')}>
                 <View style={styles('bannertext')}>
                 <Text style={{color:"#fff", fontSize:18, fontWeight:'500'}}>Treinos personalizados</Text>
                 <Text style={{color:"#fff", fontSize:15, fontWeight:'500'}}>Sob medida, pro seu</Text>
                 <Text style={{color:"#fff", fontSize:23, fontWeight:'500'}}>desenvolvimento</Text>
                 </View>
                 <TouchableOpacity style={styles('btnmodal')}>
                    <Text style={{color:"#114ADE", fontSize:18, fontWeight:'bold'}}>Treinar</Text>
                 </TouchableOpacity>
            </View>
         </View>
      }
      <View style={styles('viewcaonge')}>
      <View style={styles('viewlest')}>
        {!user.tipo && 
            <Profille/>
            }
      </View>

      <View style={styles('viewlrigh')}>
        {!user.tipo && study &&
          <Study/>
         }
         {!user.tipo && inglis &&
          <Inglish/>
         }
         
         {!user.tipo && finacis &&
         <Financials/>
         }
         
         {user.tipo && call &&
         <Motoristas/>
         }

        
      </View>
      </View>
     
        
      
       
         

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
           banner:{
             width:"100%",
             height:"20%",
             alignItems:'center',
             justifyContent:'center'
           },
           viewcaonge:{
             flex:1,
             flexDirection:'column',
           },

           viewlest:{
            width:"100%",
           },
           viewlrigh:{
            width:"100%",
            height:250,
           },

           bannertext:{
            width:"50%",
            height:"100%",
            position:'absolute',
            bottom:10,
            top:20,
            left:"40%",
            zIndex:9,

            
           },

           contbasica:{
            width:"40%",
            height:"35",
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

           bannerin:{
            width:"86%",
            height:"90%",
            backgroundColor:"#114ADE",
            borderRadius:8,
            alignItems:'stretch',
            justifyContent:'flex-end'

            
          },

          btnmodal:{
               width:100,
               height:35,
               borderRadius:8,
               backgroundColor:"#fff",
               alignItems:'center',
               justifyContent:'center',
               marginBottom:10,
               marginLeft:10
          },
       
           containsup:{
               width:"100%",
               height:"20%",
               flexDirection:'row',
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
          width:"100%",
          marginLeft:12,
          height:100,
          justifyContent:'center',
      },
           contmenu:{
               width:"100%",
               height:"5%",
               paddingLeft:30,
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
      viewcaonge:{
        flex:1,
        flexDirection:'column',
      },
      contphoto:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:"#eee",
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
 viewcaonge:{
    flex:1,
    flexDirection:'row',
  },
  viewlest:{
    width:"50%",
    height:"100%",
    backgroundColor:"#fff"
   },
   viewlrigh:{
    width:"50%",
    height:"100%"
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
      viewcaonge:{
        flex:1,
        flexDirection:'row'
      },
      viewlest:{
        width:"50%",
        height:"100%"

       },
       viewlrigh:{
        width:"50%",
        height:"100%",
        marginRight:30,
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
    bannertext:{
        width:"50%",
        height:"100%",
        position:'absolute',
        bottom:10,
        top:10,
        left:"40%",
        zIndex:9,
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
 viewcaonge:{
    flex:1,
    flexDirection:'row',
  },
       },
     },
   )