import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDzOldsjMt55UxErUM3YhJFd5yQepHZXNQ',
            authDomain: 'supermarkethelper-c8bcc.firebaseapp.com',
            databaseURL: 'https://supermarkethelper-c8bcc.firebaseio.com',
            projectId: 'supermarkethelper-c8bcc',
            storageBucket: 'supermarkethelper-c8bcc.appspot.com',
            messagingSenderId: '426815545951'
        });

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
                return(
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>
        };
    }

    render() {
        return ( 
            <View>
                <Header headerText="Log in"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;