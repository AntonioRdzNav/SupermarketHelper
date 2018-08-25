import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ProductDetail = (props) => {
    return(
        <Card>
            <CardSection>
                <Text> {props.product.title} </Text>
            </CardSection>
            <CardSection>
                <Button onPress={() => console.log("PRESSED")}>  
                    Buy Now 
                </Button>
            </CardSection>
        </Card>
    );
};

export default ProductDetail;