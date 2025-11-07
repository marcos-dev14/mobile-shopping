import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';

import { Button } from "@/components/button";

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Image 
        source={require("@/assets/logo.png")} 
        style={styles.logo}
      />

      <Button title="Adicionar" />
    </View>
  );
}
