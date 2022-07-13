import React, {useState, useContext} from 'react';
import { AuthContext } from '../../services/auth';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn} = useContext(AuthContext);
  
    function handleLogin(){
      signIn(email, password);
    }
 return (
  <>
   <View style={styles.container}>

     <View style={styles.contleft}>
     <TouchableOpacity style={styles.btnseletiva} onPress={() => navigation.navigate('SignUp')}><Text>Seletiva</Text></TouchableOpacity>
     </View>

     <View style={styles.contright}>
         <View style={styles.contlogin}>
               
               <TextInput style={styles.Input}
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
               />
               <TextInput style={styles.Input}
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
               />
               
              <TouchableOpacity style={styles.btnlogin} onPress={handleLogin}><Text>Login</Text></TouchableOpacity>
         </View>
     </View>
    
   </View>
   </>
  );
}