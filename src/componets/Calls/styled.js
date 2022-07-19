import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    
    viewplayer: {
        flexDirection: 'row',
        width: "100%",
        height: 100,
        marginTop: 6,
        backgroundColor:'#eee:rgba(255,255,255,0.1)',
        borderWidth:1,
           borderBottomColor:"#787257"
    },
   
    viewpone: {
        width: "25%",
        height: "100%",
        alignItems:'center',
        justifyContent:'center',
    },
    viewppho: {
        width: "90%",
        height: "90%",
        borderRadius:100,
    },
    viewlogo:{
        width:40,
        height:40,
        position:'absolute',
        borderRadius:20,
        bottom:2,
        right:2
        
    },

    viewpthow: {
        width: "75%",
        height: "100%",
        marginLeft:6,
       
    },
    viewpgame: {
        flex: 1,
    },
    viewpname: {
        flex: 1,
    },
    viewpnow: {
        flexDirection:'row',
        flex: 1,
    },
    viewpnowg: {
        height:"10%"
    },
    textgame:{
        marginLeft:10,
        fontSize:14,
        color:"#fff"
    },
    textname:{
        marginLeft:10,
        fontSize:14,
        color:"#fff"
    },
    textnow:{
        marginLeft:10,
        fontSize:14,
        color:"#fff"
    },
    textnowg:{
        marginLeft:4,
        fontSize:15,
        color:"#eee"
    },

    btnplay:{
        width:"100%",
        height:"100%",
        
    }
    




});

export default styles;