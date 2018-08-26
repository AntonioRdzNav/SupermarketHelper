import React from 'react';
import { Text, CheckBox, View } from 'react-native';
import { Card } from './common';
import { CardSection } from './common';
import { Button } from './common';

const ProductDetail = (props) => {
    return(
        <View style={ styles.containerStyle }>
            <CheckBox

                title='Click Here'
            />
            <Text style={ styles.inputStyle }>
                {props.product.title}
            </Text>
            <Text style={ styles.labelStyle }>
                Cantidad 
            </Text>
            <Text style={ styles.labelStyle }>
                Precio
            </Text>                        
        </View>
    );
};

const styles = {   
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 12,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 12,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40, 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default ProductDetail;