// Import library to help create a component
// "./" means start in current directory
import { AppRegistry, View } from 'react-native';
import React from 'react';
import { Header } from './src/components/common';
import Products from './src/components/Products';


import Main from './src/Main';

AppRegistry.registerComponent('superMarketHelper', () => Main);
 