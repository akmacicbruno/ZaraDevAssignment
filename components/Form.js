import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Form({ onValuesChange }) {
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const [errorEmail, setErrorEmail] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorNumber, setErrorNumber] = useState("");

    const capitalizeFirstLetter = (str) => {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    };

    const handleChangeName = (name) => {
        if (name.length < 1) {
            setErrorName("Enter your name.");
        }
        else {
            setErrorName("");
        }

        setName(capitalizeFirstLetter(name));
        onValuesChange({ name: name, number, email });
    }

    const handleChangeNumber = (number) => {
        let numberFilter = number.replace(/[^0-9+]/g, ''); // Uklanja sve znakove koji nisu brojevi i "+"
    
        if (numberFilter.startsWith('+')) {
            numberFilter = '+' + numberFilter.slice(1).replace(/\+/g, ''); // Uklanja sve dodatne znakove "+" iz unosa
        }

        if (number.length < 1) {
            setErrorNumber("Enter your phone number.");
        }
        else {
            setErrorNumber("");
        }

        setNumber(numberFilter);
        onValuesChange({name, number: number, email });
    }

    const validateEmail = (text) => {
        // Regularni izraz za provjeru valjanosti email adrese
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(text);
    };

    const handleChangeEmail = (email) => {
        if (email.length > 0) {
            if (validateEmail(email)) {
              setErrorEmail("");
            } else {
              setErrorEmail("Email address is not valid.");
            }
        }
        setEmail(email);
        onValuesChange({ name, number, email: email });
    }

    const handleFocus1 = () => {
        setIsFocused1(true);
    };

    const handleBlur1 = () => {
        setIsFocused1(false);
    };

    const handleFocus2 = () => {
        setIsFocused2(true);
    };

    const handleBlur2 = () => {
        setIsFocused2(false);
    };

    const handleFocus3 = () => {
        setIsFocused3(true);
    };

    const handleBlur3 = () => {
        setIsFocused3(false);
    };

    const inputStyle1 = {
        ...styles.Input,
        color: isFocused1 || name.length > 0 ? '#105955' : '#888888',
        borderColor: isFocused1 || name.length > 0 ? '#105955' : '#888888',
        fontFamily: isFocused1 || name.length > 0 ? 'MontserratBold' : 'MontserratRegularItalic',
    };
    const inputStyle2 = {
        ...styles.Input,
        color: isFocused2 || number.length ? '#105955' : '#888888',
        borderColor: isFocused2 || number.length ? '#105955' : '#888888',
        fontFamily: isFocused2 || number.length > 0 ? 'MontserratBold' : 'MontserratRegularItalic',
    };
    const inputStyle3 = {
        ...styles.Input,
        color: isFocused3 || email.length > 0 ? '#105955' : '#888888',
        borderColor: isFocused3 || email.length > 0 ? '#105955' : '#888888',
        fontFamily: isFocused3 || email.length > 0 ? 'MontserratBold' : 'MontserratRegularItalic',
    };

    useEffect(() => {
        if (isFocused1 === true && name.length < 1) {
            setErrorName("Enter your name.");
        }
        if (isFocused2 === true && number.length < 1) {
            setErrorNumber("Enter your phone number.");
        }
        if (isFocused3 === true && email.length < 1) {
            setErrorEmail("Enter your email address.");
        }
    })

    return(
        <View style={styles.Container}>
            <View style={styles.Item}>
                <Text style={styles.Label}>Name</Text>
                <TextInput 
                    placeholder={name.length > 0 ? '' : 'Wilde Studio'}
                    placeholderTextColor={'#888888'}
                    style={inputStyle1}
                    value={name}
                    onChangeText={handleChangeName}
                    onFocus={handleFocus1}
                    onBlur={handleBlur1}>
                </TextInput>
                <Text style={styles.errorStyle}>{errorName}</Text>
            </View>
            <View style={styles.Item}>
                <Text style={styles.Label}>Contact Number</Text>
                <TextInput 
                    placeholder={number.length > 0 ? '' : '+91 0000 0000'}
                    placeholderTextColor={'#888888'}
                    style={inputStyle2}
                    keyboardType="numeric"
                    value={number}
                    maxLength={17}
                    onChangeText={handleChangeNumber}
                    onFocus={handleFocus2}
                    onBlur={handleBlur2}>
                </TextInput>
                <Text style={styles.errorStyle}>{errorNumber}</Text>
            </View>
            <View style={styles.Item}>
                <Text style={styles.Label}>Email Address</Text>
                <TextInput 
                    placeholder={email.length > 0 ? '' : 'xyz123@gmail.com'}
                    placeholderTextColor={'#888888'}
                    style={inputStyle3}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={handleChangeEmail}
                    onFocus={handleFocus3}
                    onBlur={handleBlur3}>
                </TextInput>
                <Text style={styles.errorStyle}>{errorEmail}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 30,
        display: 'flex',
        gap: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    Item: {
        flex: 1,
        minWidth: 140,
        maxWidth: 160,
    },
    Label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#2071B2',
    },
    Input:{
        borderWidth: 1,
        borderRadius: 9,
        paddingHorizontal: 10,
        paddingVertical: 13,
        fontSize: 10,
        height: 38,
        elevation: 5,
        backgroundColor: "white",
    },
    errorStyle: {
        fontFamily: 'MontserratBold',
        fontSize: 10,
        marginTop: 2,
        paddingHorizontal: 5,
        color: '#105955',
    }
})