import React from 'react';
import { TextInput, View,Text } from 'react-native';
import { styles } from './InputsStyle';

export function InputObservation() {
    return (
        <>
            <View>
                <Text style={styles.label}>Observation</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input} placeholder='Observation'
                ></TextInput>
            </View>
        </>
    );
}