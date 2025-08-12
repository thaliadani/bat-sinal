import React from 'react';
import { Image } from 'react-native';
import { styles } from './LogoStyle';
import LogoImage from '../../../assets/images/Logo.png';

export function Logo() {
    return (
        <>
            <Image source={LogoImage} style={styles.logo} />
        </>
    );
}