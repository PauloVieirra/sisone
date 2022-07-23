import React, {useState, useContext} from 'react';
import { AuthContext } from '../../services/auth';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';

export default function SignUp() {
    const navigation = useNavigation();
    const { styles, deviceSize } = useStyles()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [ano, setAno] = useState('');
    const [nomepai, setNomepai] = useState('');
    const [nomemae, setNomemae] = useState('');
    const [endereco, setEndereco] = useState('');
    const [estatura, setEstatura] = useState('');
    const [peso, setPeso] = useState('');
    const [pratic, setPratic] = useState('');
    const [posicao, setPosicao] = useState('');
    const [pratictime, setPratictime] = useState('');
    const [estudos, setEstudos] = useState('');
    const [curso, setCurso] = useState('');
    const [instnome, setInstnome] = useState('');
    const [profissional, setProfissional] = useState('');






    const {signUp} = useContext(AuthContext);
  
    function handlecad(){
        signUp(email, password, nome, sobrenome, ano,nomepai,nomemae,endereco,estatura,peso,pratic,posicao,pratictime,estudos,curso,instnome,profissional);
    }
 return (
    <View style={styles('container')}>
    <View style={styles('contright')}>
     

        <View style={styles('contlogin')}>
              
              <TextInput style={styles('Input')}
               placeholder="E-mail"
               autoCorrect={false}
               autoCapitalize="none"
               value={email}
               onChangeText={(text) => setEmail(text)}
              />

              <TextInput style={styles('Input')}
               placeholder="Senha"
               autoCorrect={false}
               autoCapitalize="none"
               value={password}
               onChangeText={(text) => setPassword(text)}
               secureTextEntry={true}
              />
               <TextInput style={styles('Input')}
               placeholder="Nome"
               autoCorrect={false}
               autoCapitalize="none"
               value={nome}
               onChangeText={(text) => setNome(text)}
              />

              <TextInput style={styles('Input')}
               placeholder="Sobrenome"
               autoCorrect={false}
               autoCapitalize="none"
               value={sobrenome}
               onChangeText={(text) => setSobrenome(text)}
              />
               <TextInput style={styles('Input')}
               placeholder="Ano nascimento"
               autoCorrect={false}
               autoCapitalize="none"
               value={ano}
               onChangeText={(text) => setAno(text)}
              />
               <TextInput style={styles('Input')}
               placeholder="Nome do pai ou responsavel"
               autoCorrect={false}
               autoCapitalize="none"
               value={nomepai}
               onChangeText={(text) => setNomepai(text)}
              />
               <TextInput style={styles('Input')}
               placeholder="Nome da mae ou responsavel"
               autoCorrect={false}
               autoCapitalize="none"
               value={nomemae}
               onChangeText={(text) => setNomemae(text)}
              />
              <TextInput style={styles('Input')}
               placeholder="Endereco, Cidade, Bairro, Rua, Quadra"
               autoCorrect={false}
               autoCapitalize="none"
               value={endereco}
               onChangeText={(text) => setEndereco(text)}
              />
             
              <TextInput style={styles('Input')}
               placeholder="Estatura"
               autoCorrect={false}
               autoCapitalize="none"
               value={estatura}
               onChangeText={(text) => setEstatura(text)}
              />

              <TextInput style={styles('Input')}
               placeholder="Peso"
               autoCorrect={false}
               autoCapitalize="none"
               value={peso}
               onChangeText={(text) => setPeso(text)}
              />
              <TextInput style={styles('Input')}
               placeholder="Pratica basquete"
               autoCorrect={false}
               autoCapitalize="none"
               value={pratic}
               onChangeText={(text) => setPratic(text)}
              />
               <TextInput style={styles('Input')}
               placeholder="Posicao"
               autoCorrect={false}
               autoCapitalize="none"
               value={posicao}
               onChangeText={(text) => setPosicao(text)}
              />
              <TextInput style={styles('Input')}
               placeholder="Quanto tempo"
               autoCorrect={false}
               autoCapitalize="none"
               value={pratictime}
               onChangeText={(text) => setPratictime(text)}
              />
              <TextInput style={styles('Input')}
               placeholder="Ocupacao educacional"
               autoCorrect={false}
               autoCapitalize="none"
               value={estudos}
               onChangeText={(text) => setEstudos(text)}
              />
              <TextInput style={styles('Input')}
               placeholder="Serie ou curso"
               autoCorrect={false}
               autoCapitalize="none"
               value={curso}
               onChangeText={(text) => setCurso(text)}
              />
              <TextInput style={styles('Input')}
               placeholder="Instituicao"
               autoCorrect={false}
               autoCapitalize="none"
               value={instnome}
               onChangeText={(text) => setInstnome(text)}
              />
              <TextInput style={styles('Input')}
               placeholder="Ocupacao Profissional"
               autoCorrect={false}
               autoCapitalize="none"
               value={profissional}
               onChangeText={(text) => setProfissional(text)}
              />

              
             <TouchableOpacity style={styles('btnlogin')} onPress={handlecad}><Text>Cadastrar</Text></TouchableOpacity>
             
        </View>
    </View>
   
  </View>
  );
}

const useStyles = CreateResponsiveStyle(
    {
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 30,
        color: 'white',
      },
      contimg:{
        width:200,
        height:90,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:80
      },
      img:{
        width:200,
        height:90,
        resizeMode:'cover',
       
     },
  
      contright:{
        alignItems:'center',
        justifyContent:'center',
        width:"100%",
        height:"100%",
        backgroundColor:"#292C33"
      },
      contlogin:{
        width:"100%",
        height:"100%",
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'#fff:rgba(255,255,255,1.0)',
    },
    Input:{
      width:"80%",
      height:40,
      marginTop:10,
      outlineStyle: 'none',
      borderBottomWidth:1,
      borderStyle:'solid',
      borderColor:"#000",
      alignItems:'center',
      paddingLeft:10,
      justifyContent:'center',
      backgroundColor:"#fff"
  },
    btnlogin:{
      width:"80%",
      height:40,
      borderRadius:10,
      marginTop:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#FF8C00"
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
  
    },
  
    {
      [DEVICE_SIZES.SMALL_DEVICE]: {
        container: {
          backgroundColor: 'blue',
        },
        contright:{
          alignItems:'center',
          justifyContent:'center',
          width:"100%",
          height:"100%",
          backgroundColor:"#292C33"
        },
        contlogin:{
          width:"60%",
          height:"40%",
          borderRadius:12,
          alignItems:'center',
          justifyContent:'center',
          //backgroundColor:'#fff:rgba(255,255,255,1.0)',
      },
  
      },
      [DEVICE_SIZES.MEDIUM_DEVICE]: {
        container: {
          backgroundColor: 'green',
        },
        contright:{
          alignItems:'center',
          justifyContent:'center',
          width:"100%",
          height:"100%",
          backgroundColor:"#292C33"
        },
        contlogin:{
          width:"60%",
          height:"40%",
          borderRadius:12,
          alignItems:'center',
          justifyContent:'center',
          //backgroundColor:'#fff:rgba(255,255,255,1.0)',
      },
      },
  
      [DEVICE_SIZES.LARGE_DEVICE]: {
        container: {
          backgroundColor: 'black',
        },
        contright:{
          alignItems:'center',
          justifyContent:'center',
          width:"100%",
          height:"100%",
          backgroundColor:"#292C33"
        },
       
      },
  
      [DEVICE_SIZES.EXTRA_LARGE_DEVICE]: {
        container: {
          backgroundColor: 'red',
        },
        text: {
          fontSize: 20,
        },
        contright:{
          alignItems:'center',
          justifyContent:'center',
          width:"100%",
          height:"100%",
          backgroundColor:"#292C33"
        },
       
      },
    },
  )