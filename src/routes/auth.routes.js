import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from "../screens/SignIn/Index";
import SignUp from "../screens/SignUp/Index";
import Termos from "../screens/Termos/Index";

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
       <AuthStack.Navigator>
          <AuthStack.Screen 
           name="SignIn" 
           component={SignIn}
           options={{headerShown: false}}
           />

           <AuthStack.Screen 
           name="SignUp" 
           component={SignUp}/>

           <AuthStack.Screen 
           name="Termos" 
           component={Termos}/>

       
       </AuthStack.Navigator>
    );
}

export default AuthRoutes;
