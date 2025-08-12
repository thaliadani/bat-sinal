import React from 'react';
import { Text } from 'react-native';
import { styles } from './ButtonsStyle';

export function ActivateButton() {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <>
            <Text style={styles.button}
                onPress={() => setIsActive(!isActive)}
            >activate bat signal</Text>
        </>
    );
}