import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/Home/Home';
import { Form } from './src/screens/Form/Form';
import { useState } from 'react';

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <View id='form'>
          <Form setShowForm={setShowForm}/>
        </View>
      ) : (
        <View id='home'>
          <Home setShowForm={setShowForm} />
        </View>
      )}

      <StatusBar style="auto" />
    </>
  );
}



