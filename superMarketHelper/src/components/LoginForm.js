import React, {Component} from 'react';
import {  } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '' };
    state = { password: '' };

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
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;