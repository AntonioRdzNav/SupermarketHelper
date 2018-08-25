import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ProductDetail = (props) => {
    return(
        <Card>
            <CardSection>
                <Text> {props.product.title} </Text>
            </CardSection>
        </Card>
    );
};

export default ProductDetail;