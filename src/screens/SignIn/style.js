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
        width:"30%",
        height:"100%",
        backgroundColor:"#fff"
    },
    contlogin:{
        width:"80%",
        height:"40%",
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#000"
    },
    Input:{
        width:"80%",
        height:30,
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
        width:"30%",
        height:40,
        borderRadius:10,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#839477"
    },

});

export default styles;