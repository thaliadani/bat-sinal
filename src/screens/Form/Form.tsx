import React from 'react';
import { ScrollView, View } from 'react-native';
import { Logo } from '../../components/Logo/Logo';
import { InputName } from '../../components/Inputs/InputName';
import { InputCel } from '../../components/Inputs/InputCel';
import { InputLocation } from '../../components/Inputs/InputLocation';
import { InputObservation } from '../../components/Inputs/InputObservation';
import { SendButton } from '../../components/Buttons/SendButton';
import { styles } from './FormStyle';
import { BackButton } from '../../components/Buttons/BackButton';

export function Form({ setShowForm }: { setShowForm: (show: boolean) => void }) {
    return (
        <>
            <View style={styles.containerLogo}>
                <Logo></Logo>
            </View>

            <ScrollView>
                <View style={styles.container}>
                    <InputName></InputName>
                    <InputCel></InputCel>
                    <InputLocation></InputLocation>
                    <InputObservation></InputObservation>
                    <SendButton></SendButton>
                </View>
                
            </ScrollView>
            
            <View style={styles.containerBack}>
                <BackButton onPress={() => setShowForm(false)}></BackButton>
            </View>
        </>
    );
}