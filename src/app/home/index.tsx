import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';

import { Input } from '@/components/input';
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

      <Input placeholder="O que você precisa comprar?" />
      <Button title="Adicionar" />
    </View>
  );
}
