import React from 'react';
import { Text, CheckBox, View, Image, Linking } from 'react-native';
import { Card } from './common';
import { CardSection } from './common';
import { Button } from './common';

const ProductDetail = (props) => {
    return(
        <Card>
            <CardSection>
                <View styles={styles.thumbnailContainerStyle}>
                    <Image 
                        style={styles.thumbnailStyle} 
                        source= {{ uri: props.product.thumbnail_image }} 
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}> {props.product.title} </Text>
                    <Text> {props.product.artist} </Text>
                </View>             
            </CardSection>
            <CardSection>
                <Image 
                    source={{ uri: props.product.image }}
                    style={styles.imageStyle}    
                />    
            </CardSection>    
            <CardSection>
                <Button onPress={ () => Linking.openURL(props.product.url) }>
                    Buy now
                </Button>
            </CardSection>           
        </Card>
    );
};

const styles = {   
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default ProductDetail;