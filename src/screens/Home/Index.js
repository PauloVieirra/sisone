import React, { useContext} from 'react';
import { AuthContext } from '../../services/auth';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    const {signOut} = useContext(AuthContext);
 return (
   <View style={styles.container}>
    <TouchableOpacity   onPress={signOut}>
        <Text>
        Pagina de Home
        </Text>
    </TouchableOpacity>
    
   </View>
  );
}