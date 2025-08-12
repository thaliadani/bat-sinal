import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from './src/Home';
import Form from './src/Form';

export default function App() {
  return (
    <View>
      <Home/>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}


