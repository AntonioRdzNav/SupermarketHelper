import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import { Header } from './common';

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
            <ProductDetail key={product.title} product={product}/>
        );
    }

    render() {
        return (
            <View>
                {this.renderProducts()}
            </View>
        );
    }
}

export default Products;