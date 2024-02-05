import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NameInfo() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Information abou</Text>
            <Text style={styles.text_touched}>Name: </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1 / 3,
        marginBottom: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(7, 26, 93,255)',
    },
    text: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        borderRadius: 5,
    },
    text_touched: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        borderRadius: 5
    }
})