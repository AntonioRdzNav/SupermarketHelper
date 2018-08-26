import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import UserProductCreate from '../services/UserProductCreate';

class Scanner extends Component {
    state = {
        hasCameraPermission: null
    };

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
        hasCameraPermission: status === 'granted',
        });
    };

    dataSuccess

    _handleBarCodeRead = data => {
        Alert.alert(
        'Scan successful!',
        JSON.stringify(data)
        );
        <UserProductCreate 
            cantidad = {1}
            visitado = {true}
            data = {data}
        />
        // debugger;
    };

    render() {
        return (
        <View style={styles.container}>
            {this.state.hasCameraPermission === null ?
            <Text>Requesting for camera permission</Text> :
            this.state.hasCameraPermission === false ?
                <Text>Camera permission is not granted</Text> :
                <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                style={StyleSheet.absoluteFill}
                />
            }
        </View>
        );
    }
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    }
});

export default Scanner;
