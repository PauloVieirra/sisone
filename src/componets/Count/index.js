import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';

export default function Count() {

  const { styles, deviceSize } = useStyles();
 return (

    
       <LinearGradient
          colors={['rgba(58,159,248,0.4)','rgba(56,154,253,0.5)', 'rgba(57,121,182,0.8)' ]}
          style={styles('linearGradientbn')}
          start={{ x: 1.0, y: 0.6 }}
          end={{ x: 1.0, y: 1.0 }}
        >
      <View style={styles('contnumber')}>
      <Text style={{color:"#fff:rgba(255,255,255,0.8)", fontSize:30}}>138</Text>
      <Text style={{color:"#fff:rgba(255,255,255,0.8)", fontSize:13, fontWeight:'500'}}>Inscritos 2022</Text>
      </View>
      <View style={styles('contnumber')}>
      <Text style={{color:"#fff:rgba(255,255,255,0.8)", fontSize:30}}>102</Text>
      <Text style={{color:"#fff:rgba(255,255,255,0.8)", fontSize:13, fontWeight:'500'}}>Atleta ativos</Text>
      </View>
      <View style={styles('contnumber')}>
      <Text style={{color:"#fff:rgba(255,255,255,0.8)", fontSize:30}}>1</Text>
      <Text style={{color:"#fff:rgba(255,255,255,0.8)", fontSize:13, fontWeight:'500'}}>Seletivas</Text>
      </View>
      <View style={styles('contnumber')}>
      <Text style={{color:"#fff:rgba(255,255,255,0.8)", fontSize:30}}>16</Text>
      <Text style={{color:"#fff:rgba(255,255,255,0.8)", fontSize:13, fontWeight:'500'}}>Universidades</Text>
      </View>
      </LinearGradient>

  );
}

const useStyles = CreateResponsiveStyle(
  {
linearGradientbn:{
      flexDirection:'row',
      width:"100%",
      height:"100%",
},
  contnumber:{
    width:"25%",
    height:"100%",
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderRightWidth:2,
    borderLeftWidth:0,
    borderTopWidth:0,
    borderBottomWidth:0,
  
  },
     
  },

  {
    [DEVICE_SIZES.SMALL_DEVICE]: {
      linearGradientbn:{
        flexDirection:'row',
        width:"100%",
        height:"100%",
  },
    },
    [DEVICE_SIZES.MEDIUM_DEVICE]: {
      linearGradientbn:{
        flexDirection:'row',
        width:"100%",
        height:"100%",
  },
    },
    
    [DEVICE_SIZES.LARGE_DEVICE]: {
      linearGradientbn:{
        flexDirection:'row',
        width:"100%",
        height:"100%",
        backgroundColor:"#000"
  },
  
    
    },
    [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
      linearGradientbn:{
        flexDirection:'row',
        width:"100%",
        height:"100%",
  },
    },
  },
)