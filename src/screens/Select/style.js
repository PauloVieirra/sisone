import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"#eee"
    },
    contleft:{
        width:"70%",
        height:"100%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#fff"
        
    },
    contright:{
        alignItems:'center',
        justifyContent:'center',
        width:"100%",
        height:"100%",
        backgroundColor:"#1B1C20"
    },
    contlogin:{
        width:"50%",
        height:"50%",
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#343841"
    },
    Input:{
        width:"80%",
        height:60,
        marginTop:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#fff"
    },
    btnlogin:{
        width:"80%",
        height:40,
        borderRadius:10,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#fff"
    },
    btnseletiva:{
        width:"80%",
        height:40,
        borderRadius:10,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#839477"
    },

});

export default styles;