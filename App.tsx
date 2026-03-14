import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css'

export default function App() {
  return (
    <View className='bg-slate-950 flex-1 items-center justify-center'>
      <Text className='text-2xl text-gray-100 font-bold'>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}
