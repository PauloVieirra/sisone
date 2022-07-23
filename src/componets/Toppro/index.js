import React, { useContext, useState, useEffect} from 'react';
import { AuthContext } from '../../services/auth';
import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


import * as ImagePicker from 'expo-image-picker';








export default function Toppro() {
 
  const {signOut, user} = useContext(AuthContext);
  const { styles, deviceSize } = useStyles();
  const [loading, setLoading]= useState(false);
  const [image, setImage] = useState(null);
  const [urlImg, setUrlImg] = useState();


  const uploadImage = async() => {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', Image, true);
        xhr.send(null);
      });

      const ref = firebase.storage().ref().child(new Date().toISOString());
      const snapshot = ref.put(blob);

      snapshot.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
        setLoading(true);
      },
      (error) => {
        setLoading(false);
        console.log(error);
        blob.close()
        return;
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
            setLoading(false);
            console.log("DL", url);
            blob.close()
            return url;
        });
      }
     
      );
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, '/9befa507c3b7377edf9377b936a287ca.jpg');
      await getDownloadURL(reference).then((x) => {
        setUrlImg(x);
      })
    }

    if (urlImg == undefined) {func()};
  }, []);

  if (image !== null) {

    return (
      <View style={styles('contimage')}>
         <TouchableOpacity onPress={pickImage} style={styles('contimage')}>
        <Image source={{ uri: urlImg }} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles('contdata')}>
           <Text style={{color:"#fff", fontSize:25}}>{user.nome}</Text>
           <Text style={{color:"#eee", fontSize:12}}>{user.email}</Text>
           {image &&  <TouchableOpacity onPress={uploadImage}><Text style={styles.buttonText}>Salvar</Text></TouchableOpacity>}

         </View>
      </View>
    );
  }


  if (image !== null) {

    return (
      <View style={styles('contimage')}>
         <TouchableOpacity onPress={pickImage} style={styles('contimage')}>
        <Image source={{ uri: image }} style={styles('logo')} />
        </TouchableOpacity>
        <View style={styles('contdata')}>
           <Text style={{color:"#fff", fontSize:25}}>{user.nome}</Text>
           <Text style={{color:"#eee", fontSize:12}}>{user.email}</Text>
           {!image &&  <TouchableOpacity onPress={uploadImage}><Text style={styles.buttonText}>Salvar</Text></TouchableOpacity>}

         </View>
      </View>
    );
  }

  
  return (

    <View style={styles('contimageg')}>
      <TouchableOpacity style={styles('contimage')} onPress={pickImage} >
          <Image source={{ uri: urlImg }} style={styles('logo')} />
      </TouchableOpacity>
         <View style={styles('contdata')}>
           <Text style={{color:"#fff", fontSize:25}}>{user.nome}</Text>
           <Text style={{color:"#eee", fontSize:12}}>{user.email}</Text>
           
         </View>
         <TouchableOpacity onPress={signOut} style={styles('btnsair')}><Text style={styles.buttonText}><MaterialIcons name="logout" size={24} color="white" /></Text></TouchableOpacity>
    </View>
  );
}


const useStyles = CreateResponsiveStyle(
  {
     
    contimageg:{
      flex:1,
      marginLeft:1,
      flexDirection:'row',
   },
    contimage:{
       height:"100%",
       justifyContent:'center',
       alignItems:'center',
    },
    logo: {
      width: 110,
      height:110,
      borderRadius:65,
      margin:8,
    },
    
    button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
    },
    buttond: {
      padding: 20,
      borderRadius: 5,
    },
    contdata:{
      width:"100%",
      height:"100%",
      marginLeft:5,
      justifyContent:'center',
  },
  
    buttonText: {
      fontSize: 20,
      color: '#fff',
    },
    thumbnail: {
      width: 200,
      height: 200,
      borderRadius:100,
      resizeMode: 'contain',
    },
    btnsair:{
      width:"100%",
      position:'absolute',
      left:"90%",
      top:10,
      zIndex:8,
    },
 
  },

  {
    [DEVICE_SIZES.SMALL_DEVICE]: {
     
      contimage:{
         height:'100%',
         marginLeft:18,
         flexDirection:'row',
         alignItems:'center',
      },
      contimageb:{
        width:"100%",
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
     },
      logo: {
        width: 130,
        height:130,
        marginBottom: 5,
        borderRadius:65,
        marginTop:5
      },
     
      button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
      },
      buttond: {
        padding: 20,
        borderRadius: 5,
      },
      contdata:{
        width:"100%",
        marginLeft:12,
        height:100,
        justifyContent:'center',
    },
    
      buttonText: {
        fontSize: 20,
        color: '#fff',
      },
      thumbnail: {
        width: 200,
        height: 200,
        borderRadius:100,
        resizeMode: 'contain',
      },
      btnsair:{
        width:"100%",
        position:'absolute',
        left:"90%",
        top:10,
        zIndex:8,
      },

    },
    [DEVICE_SIZES.MEDIUM_DEVICE]: {
    
      contimage:{
         height:'100%',
         marginLeft:18,
         flexDirection:'row',
         alignItems:'center',
      },
      contimageb:{
        width:"100%",
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
     },
      logo: {
        width: 130,
        height:130,
        marginBottom: 5,
        borderRadius:65,
        marginTop:5
      },
      instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
      },
      button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
      },
      buttond: {
        padding: 20,
        borderRadius: 5,
      },
      contdata:{
        width:"100%",
        marginLeft:12,
        height:100,
        justifyContent:'center',
    },
    
      buttonText: {
        fontSize: 20,
        color: '#fff',
      },
      thumbnail: {
        width: 200,
        height: 200,
        borderRadius:100,
        resizeMode: 'contain',
      },
      btnsair:{
        width:"100%",
        position:'absolute',
        left:"90%",
        top:10,
        zIndex:8,
      },
    },

    [DEVICE_SIZES.LARGE_DEVICE]: {
    
      contimage:{
         height:'100%',
         marginLeft:18,
         flexDirection:'row',
         alignItems:'center',
      },
      contimageb:{
        width:"100%",
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
     },
      logo: {
        width: 130,
        height:130,
        marginBottom: 5,
        borderRadius:65,
        marginTop:5
      },
      instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
      },
      button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
      },
      buttond: {
        padding: 20,
        borderRadius: 5,
      },
      contdata:{
        width:"100%",
        marginLeft:12,
        height:100,
        justifyContent:'center',
    },
    
      buttonText: {
        fontSize: 20,
        color: '#fff',
      },
      thumbnail: {
        width: 200,
        height: 200,
        borderRadius:100,
        resizeMode: 'contain',
      },
      btnsair:{
        width:"100%",
        position:'absolute',
        left:"90%",
        top:10,
        zIndex:8,
      },
    },

    [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
    
      contimage:{
         height:'100%',
         marginLeft:10,
         flexDirection:'row',
         alignItems:'center',
      },
      contimageb:{
        width:"100%",
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
     },
      logo: {
        width: 130,
        height:130,
        marginBottom: 5,
        borderRadius:65,
        marginTop:5
      },
      instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
      },
      button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
      },
      buttond: {
        padding: 20,
        borderRadius: 5,
      },
      contdata:{
        width:"100%",
        marginLeft:12,
        height:100,
    },
    
      buttonText: {
        fontSize: 20,
        color: '#fff',
      },
      thumbnail: {
        width: 200,
        height: 200,
        borderRadius:100,
        resizeMode: 'contain',
      },
      btnsair:{
        width:"100%",
        position:'absolute',
        left:"90%",
        top:10,
        zIndex:8,
      },
    },
  },
)