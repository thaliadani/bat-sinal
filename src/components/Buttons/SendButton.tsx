import React from 'react';
import { Text } from 'react-native';
import { styles } from './ButtonsStyle';


export function SendButton() {
    return (
        <>
            <Text onPress={() => alert('Data sent')} style={styles.button}>Send</Text>
        </>
    );
}