import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Products from './components/Products';

class Main extends Component {
    state = { loggedIn: null };

    componentWillMount(){
        if(firebase.initializeApp.length){
            firebase.initializeApp({
                apiKey: 'AIzaSyDzOldsjMt55UxErUM3YhJFd5yQepHZXNQ',
                authDomain: 'supermarkethelper-c8bcc.firebaseapp.com',
                databaseURL: 'https://supermarkethelper-c8bcc.firebaseio.com',
                projectId: 'supermarkethelper-c8bcc',
                storageBucket: 'supermarkethelper-c8bcc.appspot.com',
                messagingSenderId: '426815545951'
            });
        }

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn:true });
            } else{
                this.setState({ loggedIn:false });
            }
        });
    }

    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return <Products/>;
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>
        };
    }

    render() {
        return ( 
            <Provider store={createStore(reducers)}>
                <View style={ {flex: 1} }>  
                    {this.renderContent()}
                </View>                
            </Provider>  
        );
    }
}

export default Main;