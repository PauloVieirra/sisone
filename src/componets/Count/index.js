import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

export default function Count() {
    function count(){
        var counter = { var: 0 };
        TweenMax.to(counter, 3, {
          var: 100, 
          onUpdate: function () {
            var number = Math.ceil(counter.var);
            $('.container').html(number);
            if(number === counter.var){ count.kill(); }
          },
          onComplete: function(){
            count();
          },    
          ease:Circ.easeOut
        });
      }
      
      count();
 return (
   <View style={styles.container}><Text>0</Text></View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
    height:60,
    backgroundColor:"#eee"
 },
})