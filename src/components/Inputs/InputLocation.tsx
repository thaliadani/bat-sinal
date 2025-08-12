import React from 'react';
import { TextInput, View,Text } from 'react-native';
import { styles } from './InputsStyle';

export function InputLocation() {
    return (
        <>
            <View>
                <Text style={styles.label}>Location</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input} placeholder='Location'
                ></TextInput>
            </View>
        </>
    );
}