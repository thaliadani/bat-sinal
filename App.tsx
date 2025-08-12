import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/Home/Home';
import { Form } from './src/screens/Form/Form';

export default function App() {
  return (
    <>
      <View>
        <Home />
      </View>

      <View>
        <Form />
      </View>

      <StatusBar style="auto" />
    </>
  );
}



