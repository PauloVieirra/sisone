import React from 'react';
import { View, Text } from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './style';


export default function Inglish() {
 return (
          <WebView style={styles.container}
          source={{ html: 'https://www.google.com/' }}></WebView>
  );
}