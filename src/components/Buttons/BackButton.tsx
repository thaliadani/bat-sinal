import React from 'react';
import { Text } from 'react-native';
import { styles } from './ButtonsStyle';

interface BackButtonProps {
    onPress?: () => void;
}

export function BackButton({ onPress }: BackButtonProps) {
    return (
        <>
            <Text
                style={styles.button}
                onPress={onPress}>
                Back
            </Text>
        </>
    );
}