import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Home from "../screens/Home/Index";


const AppStack = createStackNavigator();

function AppRoutes(){
    return(
      
       <AppStack.Navigator>
          
           <AppStack.Screen name="Home" component={Home}options={{headerShown: false}}/>
          
          
       </AppStack.Navigator>
     
    );
}

export default AppRoutes;