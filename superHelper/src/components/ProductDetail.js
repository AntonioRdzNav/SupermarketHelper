import React from 'react';
import { Text } from 'react-native';
import { Card } from './common';
import { CardSection } from './common';
import { Button } from './common';

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