import React from 'react';
import { View } from 'react-native';
import { styles } from './HomeStyle';
import {Logo} from '../../components/Logo/Logo';
import {ActivateButton} from '../../components/Buttons/ActivateButton';

export function Home() {
    return (
        <View style={styles.container}>
            <Logo></Logo>
            <ActivateButton></ActivateButton>
        </View>
    );
}