import React from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function Header(){
    
    return(
        <View style={styles.header}>
            <Text style={styles.headerText} onPress={() => Alert.alert('Going back.')}>Back</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'MontserratRegular',
        fontSize: 14,
        lineHeight: 17,
        color: '#2071B2',
    },
});