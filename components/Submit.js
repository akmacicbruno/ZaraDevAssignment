import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ContextForm } from "../App";
import Loading from "./Loading";

export default function Submit() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorRequired, setErrorRequired] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { name, number, email } = useContext(ContextForm);

  const validateEmail = (text) => {
    // Regularni izraz za provjeru valjanosti email adrese
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
} ;

  const handlePress = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    const validEmail = validateEmail(email);
    if (name === "" || number === "" || !validEmail){
      setIsDisabled(true);
      setErrorRequired('*Name, phone number and email are required.');
    }
    else {
      setIsDisabled(false);
      setErrorRequired('');
    }
  })

  return(
      <View style={styles.Container}>
          {isLoading ? (
            <Loading />
          ) : (
            <View>
              <TouchableOpacity
                style={isDisabled ? styles.buttonPressed : styles.Button}
                disabled={isDisabled}
                onPress={handlePress}>
                <Text style={styles.ButtonText}>submit</Text>
              </TouchableOpacity>
              <Text style={styles.errorStyle}>{errorRequired}</Text>
            </View>
        )}
      </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 40,
    },
    Button: {
        backgroundColor: '#20B2AA',
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        display: 'flex',
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: '#105955',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
        display: 'flex',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'white',
    },
    errorStyle: {
      fontFamily: 'MontserratBold',
      fontSize: 10,
      marginTop: 2,
      paddingHorizontal: 5,
      color: '#105955',
    },
})