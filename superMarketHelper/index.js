// Import library to help create a component
import { AppRegistry, Text } from 'react-native';
import React from 'react';
// "./" means start in current directory
import Header from './src/components/Header';

// Create a component
const App = () => (
    <Header headerText={ 'ShopList' } />
);


// Render component 
// ReactNative.AppRegistry.registerComponent('superMarketHelper', () => App);
AppRegistry.registerComponent('superMarketHelper', () => App);
 