import React, {Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress(){
        const {email,password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLogingSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLogingSuccess.bind(this)) 
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail(){
        this.setState({ error: 'Authentication Failed.', loading: false })
    }
 
    onLogingSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small"/>;
        }
        
        return(
            <Button renderButton onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder = "user@domain.com"
                        label = "Email" 
                        value = {this.state.email}
                        onChangeText = {email => this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password" 
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;