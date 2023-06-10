import React, { useState, createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import Slider from './components/Slider';
import Comment from './components/Comment';
import Submit from './components/Submit';
import { useFonts } from '@expo-google-fonts/montserrat';
import Loading from './components/Loading';

export const ContextForm = createContext();

export default function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const contextValue = { name, number, email };

  const [fontsLoaded] = useFonts({
    MontserratRegular: require('@expo-google-fonts/montserrat/Montserrat_400Regular.ttf'),
    MontserratRegularItalic: require('@expo-google-fonts/montserrat/Montserrat_400Regular_Italic.ttf'),
    MontserratBold: require('@expo-google-fonts/montserrat/Montserrat_700Bold.ttf'),
  });

  if (!fontsLoaded) {
    // Ako fontovi još nisu učitani, možete prikazati placeholder ili loading komponentu
    return <Loading />;
  }

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };
  
  const handleFormValues = ( {name, number, email} ) => {
    setName(name);
    setNumber(number);
    setEmail(email);
  };
  

  return (
    <ContextForm.Provider value={contextValue}>
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.container}>
          <Header></Header>
          <Form onValuesChange={handleFormValues}></Form>
          <Slider></Slider>
          <Comment></Comment>
          <Submit></Submit>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </ContextForm.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginHorizontal: 25,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
