// Import library to help create a component
import { AppRegistry, View } from 'react-native';
import React from 'react';
// "./" means start in current directory
import Header from './src/components/Header';
import Products from './src/components/Products';

// Create a component
const App = () => (
    <View>
        <Header headerText={ 'Products' } /> 
        <Products />
    </View>
);


// Render component 
// ReactNative.AppRegistry.registerComponent('superMarketHelper', () => App);
AppRegistry.registerComponent('superMarketHelper', () => App);
 