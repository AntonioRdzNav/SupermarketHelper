import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// onPress defractoring contains a function to call
const Button = ( { onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
            <Text style={styles.textStyle}>
                Click me! 
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default Button;