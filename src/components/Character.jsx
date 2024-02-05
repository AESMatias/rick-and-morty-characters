import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Character = ({ charData }) => {
    return (
        <View style={styles.general_container}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: `${charData.image}` }}
                />
                <Text style={styles.text}>{charData.name}</Text>
            </View>
            <View styles={styles.container_info}>
                <Text style={styles.text_info}>Status: {charData.status}</Text>
                <Text style={styles.text_info}>Species: {charData.species}</Text>
                <Text style={styles.text_info}>Gender: {charData.gender}</Text>
                <Text style={styles.text_info}>Location: {charData.location.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_info: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
    },
    general_container: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        marginBottom: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(100, 240, 150, 0.35)',
        borderWidth: 0.8,
        borderColor: 'rgba(200, 255, 200, 0.8)',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 5,
        margin: 5,

    },
    text: {
        color: 'rgba(10, 60, 20, 1)',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(210, 255, 210, 1)',
        padding: 2,
        marginTop: 3,
        textShadowColor: 'green',
        textShadowOffset: { width: 0.1, height: 0.1 },
        textShadowRadius: 1,
        textAlign: 'center',
        minWidth: '60%',
    },
    text_info: {
        color: 'black',
        fontSize: 14,
        backgroundColor: 'rgba(200, 200, 200, 0.6)',
        padding: 1,
        borderRadius: 2,
        textShadowColor: 'black',
        width: '100%',
        maxWidth: '50%',
        alignSelf: 'center',
        textAlign: 'left',
        marginBottom: 2,

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',

    }
})