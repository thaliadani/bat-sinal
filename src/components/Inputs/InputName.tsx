import React from 'react';
import { TextInput, View,Text } from 'react-native';
import { styles } from './InputsStyle';

export function InputName() {
    return (
        <>
            <View>
                <Text style={styles.label}>Name</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input} placeholder='Name'
                ></TextInput>
            </View>
        </>
    );
}