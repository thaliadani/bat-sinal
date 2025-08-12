import React from 'react';
import { TextInput, View,Text } from 'react-native';
import { styles } from './InputsStyle';

export function InputCel() {
    return (
        <>
            <View>
                <Text style={styles.label}>Celphone</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input} placeholder='Celphone'
                    keyboardType='phone-pad'
                ></TextInput>
            </View>
        </>
    );
}