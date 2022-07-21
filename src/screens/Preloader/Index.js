import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity,Image, ImageBackground, Pressable } from 'react-native';
import stylesy from './style';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Count from '../../componets/Count';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };


export default function Preloader() {

    const navigation = useNavigation();
    const { styles, deviceSize } = useStyles();
    console.log(styles);
    
    const image = { uri: 'https://wallpaperaccess.com/full/1744056.jpg' };

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
     <LinearGradient
        colors={['#1000', '#000', '#1D1D25']}
        style={{ flex: 1 }}
        start={{ x: 1.2, y: 0.5 }}
        end={{ x: 0.5, y: 1.8 }}
      > 
      
    <View style={styles ('containleft')}>
         <ImageBackground source={image} style={styles('backgroundimage')}>
                     
              <View style={styles('contimg')}>
                    <Image source={require('../../../assets/plushunter.png')} style={styles('img')}/>
                    <View style={styles('contimgplay')}>
                         <TouchableOpacity style={styles('btnmenusup')}> <Text style={styles('txt')}>Bolsa esportiva</Text> </TouchableOpacity>
                         <TouchableOpacity style={styles('btnmenusup')}> <Text style={styles('txt')}>Inglês</Text> </TouchableOpacity>
                         <TouchableOpacity style={styles('btnmenusup')}> <Text style={styles('txt')}>Visto e Passaporte</Text> </TouchableOpacity>
                         <TouchableOpacity style={styles('btnmenusup')}> <Text style={styles('txt')}>Acompanhamento</Text> </TouchableOpacity>
                         <TouchableOpacity style={styles('btnmenusup')}> <Text style={styles('txt')}>Educação</Text> </TouchableOpacity>
                         <TouchableOpacity style={styles('btnlog')}> <Text style={styles('txt')}>LOGIN</Text> </TouchableOpacity>
                    </View>
              </View>
    <View style={styles('conttexttitlee')}>
        <Text style={stylesy.textintotitle}> Basquete e educação ao seu alcance</Text>
    </View>
    <View style={styles('conttext')}>
        <Text style={stylesy.textinto}> 
                   Aqui você poderá procurar por Universidades e High Schools americanas, 
                   aprender com dicas de como conseguir sua própria bolsa de estudos, 
                   ter aulas com os maiores especialistas do mercado de basquete através 
                   de vídeos exclusivos.
        </Text>
        </View>
        </ImageBackground>
    </View>
    <View style={styles('score')}>
       <Count/>
    </View>

    <View style={styles('containright')}>
             
           <Pressable style={styles('btnb')} onPress={() => navigation.navigate ("SignIn")}>
           <Text style={styles('textbtnb')}> Login </Text>
           </Pressable>
           
           <Pressable style={styles('btn')} onPress={() => navigation.navigate ("Select")}>
           <Text style={stylesy.textbtn}> Seletiva </Text>
           </Pressable>
           
    </View>
   
    </LinearGradient>
   </View>
  );
}

const useStyles = CreateResponsiveStyle(
     {
          container:{
               flex:1,
               backgroundColor:"#292C33"
           },
           txt:{
             color:'#eee:rgba(0,0,0,0.0)',
            fontSize:18
         },
           containleft:{
               width:"100%",
               height:"50%",
               alignItems:'center',
           },
           backgroundimage:{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            },
           conttexttitlee:{
               width:"100%",
               alignItems:'center'
           },
           textintotitle:{
            fontSize:25,
            color:"#fff"
        },
           conttext:{
               width:"100%",
               paddingTop:20,
               paddingLeft:40,
               paddingRight:40,
               
           },
           contimg:{
            width:"100%",
            height:90,
            marginTop:100,
            alignItems:'center',
            justifyContent:'center',
          },
          img:{
            width:180,
            height:90,
            resizeMode:'cover',
         },
         btn:{
               width:"80%",
               height:45,
               borderRadius:6,
               margin:10,
               backgroundColor:"#ff6847",
               justifyContent:'center',
               alignItems:'center'
           },
           textbtnb:{
            color:"#fff"
         },
           image:{
               width:"100%",
               height:"100%",
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
               left:"2%"
           },
           textmenu:{
               color:"#fff"
           },
           containright:{
               width:"100%",
               height:"50%",
               alignItems:'center',
               justifyContent:'center'
           },
           btnb:{
            width:"80%",
             height:50,
             borderRadius:6,
             margin:10,
             backgroundColor:"#ff6847",
             justifyContent:'center',
             alignItems:'center',
             color:"#fff"
         },
         textbtnbf:{
            color:"#fff"
         },
     },
   
     {
       [DEVICE_SIZES.SMALL_DEVICE]: {
        container:{
          flex:1,
          backgroundColor:"#fff"
      },

       },
       [DEVICE_SIZES.MEDIUM_DEVICE]: {
        container:{
            flex:1,

            backgroundColor:"#292C33"
        },
        containleft:{
            flex:1,
            //backgroundColor: '#fff:rgba(255,220,0,0.1)',
            alignItems:'center'
   },
   containright:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
   
 },
 conttexttitlee:{
     width:"100%",
     height:"10%",
     marginBottom:20,
     alignItems:'center',
     justifyContent:'center',
 },
 conttext:{
     width:"80%",
     alignItems:"center",
     paddingTop:20,
     paddingLeft:10,
     paddingRight:10,
 },
 contimg:{
  width:"100%",
  marginTop:10,
  
},
img:{
  width:200,
  height:90,
  resizeMode:'cover',
  position:'absolute',
  top:0,
 
},
btn:{
     width:"40%",
     height:50,
     borderRadius:6,
     margin:10,
     backgroundColor:"#ff6847",
     justifyContent:'center',
     alignItems:'center'
 },
 image:{
     width:"100%",
     height:"100%",
    

 },
 btnmenu:{
     width:70,
     height:"80%",
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
     left:"2%"
 },
 textmenu:{
     color:"#fff"
 },
 btnb:{
    width:"40%",
     height:50,
     borderRadius:6,
     margin:10,
     backgroundColor:"#ff6847",
     justifyContent:'center',
     alignItems:'center',
     color:"#fff"
 },
 textbtnb:{
    color:"#fff"
 },
       },
   
       [DEVICE_SIZES.LARGE_DEVICE]: {
        container:{
            flex:1,
            backgroundColor:"#292C33"
        },
        containleft:{
        width:"100%",
        height:"50%",
        alignItems:'flex-start',
        justifyContent:'flex-end',
   },
   containright:{
     width:"100%",
        height:"50%",
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingTop:100,
        paddingLeft:20,
    },

 conttexttitlee:{
     alignItems:'flex-start',
     justifyContent:'flex-end',
     marginTop:60,
     paddingLeft:30,
     width:"50%",
    
 },
 conttext:{
     width:"50%",
     paddingBottom:20
    
 },
    contimgplay:{
    alignItems:'flex-end',
     justifyContent:'flex-start',
     paddingLeft:"30%",
    flexDirection:'row',
    width:"100%",
    height:"20%",
    position:'absolute',
    backgroundColor: '#000 rgba(0,0,0,0.6)',
    top:0,left:0,
    zIndex:1
    },
    btnmenusup:{
        height:35,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20
    },
 contimg:{
  width:"100%",
  height:"100%",
  marginTop:0,
  position:'absolute',
  top:0,
  zIndex:0
  
},
img:{
    width:130,
    height:50,
    position:'absolute',
    top:18,
    left:30,
    zIndex:2
   },
 image:{
     width:"100%",
     height:"100%",
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
     left:"2%"
 },
 textmenu:{
     color:"#fff"
 },
 txt:{
    color:"#fff",
    fontSize:14
 },
 btnlog:{
    width:100,
    height:35,
    borderRadius:6,
    borderWidth:1,
    borderColor:"#fff", 
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    right:30,
    top:20
 },
 score:{
    width:"100%",
    height:60,
    backgroundColor:"#eee"
 },
 btnb:{
    width:"41%",
     height:50,
     borderRadius:6,
     margin:10,
     backgroundColor:"#ff6847",
     justifyContent:'center',
     alignItems:'center',
     color:"#fff"
 },
 textbtnbf:{
    color:"#fff"
 },
 btn:{
    width:"40%",
     height:50,
     borderRadius:6,
     margin:10,
     backgroundColor:"#ff6847",
     justifyContent:'center',
     alignItems:'center',
     color:"#fff"
 },
 textbtn:{
    color:"#fff"
 },
 
       },
   
       [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
        container:{
            flex:1,
            backgroundColor:"#292C33"
        },
        containleft:{
        width:"100%",
        height:"50%",
        alignItems:'flex-start',
        justifyContent:'flex-end',
   },
   containright:{
     width:"100%",
        height:"50%",
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingTop:100,
        paddingLeft:20,


 },

 conttexttitlee:{
     alignItems:'flex-start',
     justifyContent:'flex-end',
     paddingLeft:30,
     width:"50%",
    
 },
 conttext:{
     width:"50%",
     paddingBottom:20
    
 },
 contimgplay:{
    alignItems:'flex-end',
     justifyContent:'flex-start',
     paddingLeft:"40%",
    flexDirection:'row',
    width:"100%",
    height:"20%",
    position:'absolute',
    backgroundColor: '#000 rgba(0,0,0,0.6)',
    top:0,left:0,
    zIndex:1
    },
    btnmenusup:{
        height:35,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20
    },
 contimg:{
  width:"100%",
  height:"100%",
  marginTop:0,
  position:'absolute',
  top:0,
  zIndex:0
  
},
img:{
 width:130,
 height:50,
 position:'absolute',
 top:18,
 left:30,
 zIndex:2
},
 image:{
     width:"100%",
     height:"100%",
    

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
     left:"2%"
 },
 textmenu:{
     color:"#fff"
 },
 txt:{
    color:"#fff",
    fontSize:14

 },
 btnlog:{
    width:100,
    height:35,
    borderRadius:6,
    borderWidth:1,
    borderColor:"#fff", 
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    right:30,
    top:20
 },
 btnb:{
    width:"41%",
     height:50,
     borderRadius:6,
     margin:10,
     backgroundColor:"#ff6847",
     justifyContent:'center',
     alignItems:'center',
     color:"#fff"
 },
 textbtnbf:{
    color:"#fff"
 },
 btn:{
    width:"40%",
     height:50,
     borderRadius:6,
     margin:10,
     backgroundColor:"#ff6847",
     justifyContent:'center',
     alignItems:'center',
     color:"#fff"
 },
 textbtn:{
    color:"#fff"
 },
       },
     },
   )