import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDzOldsjMt55UxErUM3YhJFd5yQepHZXNQ',
            authDomain: 'supermarkethelper-c8bcc.firebaseapp.com',
            databaseURL: 'https://supermarkethelper-c8bcc.firebaseio.com',
            projectId: 'supermarkethelper-c8bcc',
            storageBucket: 'supermarkethelper-c8bcc.appspot.com',
            messagingSenderId: '426815545951'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Log in"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;