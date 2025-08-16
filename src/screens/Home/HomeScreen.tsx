import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './HomeStyle';
import {Logo} from '../../components/Logo/Logo';
import {ActivateButton} from '../../components/Buttons/ActivateButton';

export default function HomeScreen({ navigation }: any) {
    const navToForm = () => {
        navigation.navigate('Form')
    };
    return (
        <View style={styles.container}>
            
            <Logo></Logo>

            <ActivateButton onPress={navToForm}></ActivateButton>

            <StatusBar style="auto" />
        </View>
    );
}