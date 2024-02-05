import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import { searchByName } from './Fetching';

export const WriteNameComponent = ({ setdataFetched, onChangeText, text }) => {
    const handleFetch = async () => {
        const nameSearched = await searchByName(text);
        setdataFetched(nameSearched);

        // arrayOfCharacters.then((data) => {
        //     console.log('data', data);
        // })
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search by name"
                clearTextOnFocus={true}
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={text}
            />
            <Pressable
                onPress={handleFetch}
                activeOpacity={0.5}
                style={styles.button}>
                <Text style={styles.text}>Search!</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1 / 7,
        width: '98%',
        flexDirection: 'column',
        backgroundColor: 'rgba(50, 100, 50,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
    },
    input: {
        height: 40,
        margin: 2,
        borderWidth: 1,
        width: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 5,
        borderRadius: 5,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 20,

    },
    button: {

        alignItems: "center",
        borderRadius: 5,
        //red color rgba
        borderColor: 'rgba(20, 100, 50, 1)',
        backgroundColor: 'rgba(20, 180, 50, 0.5)',
        borderWidth: 1.5,
        textTransform: 'uppercase',
        color: 'white',
        alignSelf: 'center',
        width: '90%',
        padding: 5,
        margin: 5,
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
    }
});