import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Slider } from 'react-native-elements';

export default function SliderComponent() {
    const [value, setValue] = useState(1);

    const handleSliderChange = (newValue) => {
        setValue(newValue);
    };

    const stylesText1 = {
        ...styles.EmojiText,
        color: value === 1 ? '#105955' : '#A5E0DD',
    }
    const stylesText2 = {
        ...styles.EmojiText,
        color: value === 2 ? '#105955' : '#A5E0DD',
    }
    const stylesText3 = {
        ...styles.EmojiText,
        color: value === 3 ? '#105955' : '#A5E0DD',
    }
    const stylesText4 = {
        ...styles.EmojiText,
        color: value === 4 ? '#105955' : '#A5E0DD',
    }
    const stylesText5 = {
        ...styles.EmojiText,
        color: value === 5 ? '#105955' : '#A5E0DD',
    }

    return(
        <View style={styles.Container}>
            <View style={styles.Label}>
                <Text style={styles.Text}>Share your experience in scaling</Text>
            </View>
            <View style={styles.Graphic}>
                <View style={styles.GraphicItem}>
                   <Image style={styles.Emoji} source={value === 1 ? require('../assets/Worst-1.png') : require('../assets/Worst.png')}/>
                   <Text style={stylesText1}>Worst</Text> 
                </View>
                <View style={styles.GraphicItem}>
                   <Image style={styles.Emoji} source={value === 2 ? require('../assets/Fine.png') : require('../assets/Fine-1.png')}/>
                   <Text style={stylesText2}>Not Good</Text> 
                </View>
                <View style={styles.GraphicItem}>
                   <Image style={styles.Emoji} source={value === 3 ? require('../assets/Neutral-1.png') : require('../assets/Neutral.png')}/>
                   <Text style={stylesText3}>Fine</Text> 
                </View>
                <View style={styles.GraphicItem}>
                   <Image style={styles.Emoji} source={value === 4 ? require('../assets/Good.png') : require('../assets/Good-1.png')}/>
                   <Text style={stylesText4}>Look Good</Text> 
                </View>
                <View style={styles.GraphicItem}>
                   <Image style={styles.Emoji} source={value === 5 ? require('../assets/Loveit-1.png') : require('../assets/Loveit.png')}/>
                   <Text style={stylesText5}>Very Good</Text> 
                </View>
            </View>
            <View style={styles.Slider}>
                <Slider
                    onValueChange={handleSliderChange}
                    minimumTrackTintColor='#105955'
                    maximumTrackTintColor='#A5E0DD'
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    value={1}
                    thumbTouchSize={styles.touch}
                    thumbStyle={styles.Kvacica}>
                </Slider>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 30,
    },
    Text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2071B2',
        marginBottom: 10,
    },
    Graphic: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
    },
    GraphicItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Emoji: {
        width: 40,
        height: 40,
    },
    EmojiText: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: 12,
        fontWeight: 'bold',
        maxWidth: 34,
        textAlign: 'center',
        
    },
    Slider: {},
    Kvacica: {
        width: 24,
        height: 24,
        backgroundColor: '#A5E0DD',
        borderWidth: 2,
        borderColor: '#105955'
    },
    touch: {
        width: 5,
        height: 5,
    }
})