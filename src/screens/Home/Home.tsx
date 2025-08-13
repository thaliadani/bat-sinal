import React from 'react';
import { View } from 'react-native';
import { styles } from './HomeStyle';
import {Logo} from '../../components/Logo/Logo';
import {ActivateButton} from '../../components/Buttons/ActivateButton';

export function Home({ setShowForm }: { setShowForm: (show: boolean) => void }) {
    return (
        <View style={styles.container}>
            <Logo></Logo>
            <ActivateButton onPress={() => setShowForm(true)}></ActivateButton>
        </View>
    );
}