import { StatusBar } from 'expo-status-bar';
import {  Text, View , TextInput, Button} from 'react-native';
import Form from './components/Form'
import styles from './App.scss'
import { Provider } from 'react-redux';
import store from './store/store';
import List from './components/List';

export default function App() {
  return (
    <Provider store={store} >
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Demo Form</Text>
      <Form />
    </View>
    </Provider>
  );
}

