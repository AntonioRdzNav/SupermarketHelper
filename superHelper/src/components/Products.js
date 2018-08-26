import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import ProductDetail from './ProductDetail';
import { Header, CardSection, Button, Card } from './common';

class Products extends Component {
    state = {products: [] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                 response => this.setState({ products: response.data })
            );
    }
 
    renderProducts(){
        return this.state.products.map(product => 
            <CardSection>
                <ProductDetail key={product.title} product={product}/>
            </CardSection>

        );
    }
 
    render() {
        return (
            <Card >
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()} style={styles.logoutStyle}>
                        Log Out
                    </Button>
                </CardSection>
                    {this.renderProducts()}
                <CardSection>
                    <Text> Total = ... </Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    logoutStyle:{
        flex:0.5,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default Products;