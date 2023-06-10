import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function Comment() {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const inputStyle = {
        ...styles.text,
        color: isFocused ? '#105955' : '#888888',
        borderColor: isFocused ? '#105955' : '#888888',
        fontFamily: isFocused ? 'MontserratBold' : 'MontserratRegular',
    };

    return(
        <View style={styles.container}>
            <View style={styles.shadow}>
                <TextInput 
                    placeholder={isFocused ? '' : 'Add your comments...'}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    editable
                    style={inputStyle}
                    multiline
                    numberOfLines={4}
                ></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    text:{
        borderWidth: 1,
        borderRadius: 9,
        padding: 10,
        display: 'flex',
        textAlignVertical: 'top',
        justifyContent: 'flex-start',
        fontSize: 12,
    },
    shadow: {
        borderRadius: 9,
        elevation: 5,
        backgroundColor: "white",
    },
})