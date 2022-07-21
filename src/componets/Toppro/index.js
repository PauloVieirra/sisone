import React, { useContext, useState, useEffect} from 'react';
import { AuthContext } from '../../services/auth';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../../services/firebaseConnection';
import { ActivityIndicator } from 'react-native';

export default function Toppro() {

  if(!firebase.apps.length){
    firebase.initializeApp(firebase);  
  }

 
  const {signOut, user} = useContext(AuthContext);
  const [loading, setLoading]= useState(false);
  const [image, setImage] = useState("");

  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Negado");
        }
      }
    })();
    }, []);
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }

  };

  if (image !== null) {

    return (
      <View style={styles.contimage}>
         <TouchableOpacity onPress={pickImage} style={styles.contimage}>
        <Image source={{ uri: image }} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.contdata}>
           <Text style={{color:"#fff", fontSize:25}}>{user.nome}</Text>
           <Text style={{color:"#eee", fontSize:12}}>{user.email}</Text>
           {!loading? <TouchableOpacity onPress={uploadImage}> <Text style={styles.buttonText}>Salvar</Text></TouchableOpacity>:<ActivityIndicator/>}

         </View>
      </View>
    );
  }

  const uploadImage = async ()=>{
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', image, true);
        xhr.send(null);
      });

      const ref = firebase.storage().ref().child(new Date().toISOString());
      const snapshot = ref.put(blob);

      snapshot.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        ()=>{
        setLoading(true)
      },
      (error)=>{
        setLoading(false)
        console.log(error);
        blob.close()
        return
      },
      ()=>{
        snapshot.snapshot.ref.getDownloadURL().then((url)=>
        {
          setLoading(false);
          console.log("DL", url);
          blob.close();
          return url;
      })
      }
     
      );
  };



  return (
    <View style={styles.contimage}>
      <TouchableOpacity style={styles.contimage} onPress={pickImage} >
          <Image source={{ uri: 'https://www.pinpng.com/pngs/m/53-531868_person-icon-png-transparent-png.png' }} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.contdata}>
           <Text style={{color:"#fff", fontSize:25}}>{user.nome}</Text>
           <Text style={{color:"#eee", fontSize:12}}>{user.email}</Text>
           
           <TouchableOpacity onPress={signOut}> <Text style={styles.buttonText}>Sair</Text></TouchableOpacity>
       
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});