import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Scanner from './src/components/Scanner';
import Main from './src/Main';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

export default class App extends React.Component {
  render() {
      return (
        <Router>
          <Scene key="root">
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={{ backgroundColor: '#FFFFFF', height: '7%' }}
            >
              <Scene key="List" title="LIST" icon={TabIcon}>
                  <Scene 
                    key="list"
                    component={Main}
                    title="Main"
                    initial
                  />
              </Scene>
              <Scene key="Cam" title="CAMERA" icon={TabIcon}>
                <Scene 
                  key="list"
                  component={Scanner}
                  title="Scanner"
                  initial
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      );
  }
}

