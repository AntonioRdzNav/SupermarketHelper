import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import {connect} from 'react-redux';    
import ProductDetail from './ProductDetail';
import { Spinner, Button, Card } from './common';

class Products extends Component {
    state = {products: [], loadingContent: true };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                 response => this.setState({ products: response.data, loadingContent: false })
            );
    }
 
    renderProducts(){
        if(this.state.loadingContent)
            return(
                <View style={styles.spinnerStyle}>
                    <Spinner size="large"/>
                </View>
            )
        return (
            this.state.products.map(product => 
                <ProductDetail key={product.title} product={product}/>
            )
        );
    }
    renderButton(){
        return(
            <Button onPress={() => firebase.auth().signOut()} style={styles.logoutStyle}>
                Log Out
            </Button>  
        );
    }

    render() {
        return (            
                <Card>
                    <ScrollView>
                        {this.renderProducts()}  
                        {this.renderButton()}             
                    </ScrollView>                                                     
                </Card>                                      
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
}   

const styles = {
    logoutStyle:{
        flex:1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinnerStyle:{
        padding: 40
    }
};

export default connect(mapStateToProps)(Products);