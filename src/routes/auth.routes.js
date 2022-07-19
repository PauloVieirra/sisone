import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Preloader from "../screens/Preloader/Index";
import SignIn from "../screens/SignIn/Index";
import SignUp from "../screens/SignUp/Index";
import Termos from "../screens/Termos/Index";
import Select from "../screens/Select/Index";


const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        
       <AuthStack.Navigator>


          
          <AuthStack.Screen 
           name="Preloader" 
           component={Preloader}
           options={{headerShown: false}}
           />
           <AuthStack.Screen 
           name="SignIn" 
           component={SignIn}
           options={{headerShown: false}}
           />
          
          

           <AuthStack.Screen 
           name="SignUp" 
           component={SignUp}
           options={{title:"Inscrição"}}/>

           <AuthStack.Screen 
           name="Select" 
           component={Select}
           options={{headerShown: false}}
           />

          

           <AuthStack.Screen 
           name="Termos" 
           component={Termos}/>

       
       </AuthStack.Navigator>
    );
}

export default AuthRoutes;
