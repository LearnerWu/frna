'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var _navigator;
var MainScreen = require('./MainScreen');
var InfoScreen = require('./InfoScreen');
var TryScreen = require('./TryScreen');

var reactNative = React.createClass({

  routeMapper: function(route, Navigator) {
    switch (route) {
      case 'home':
        return (
          <View style={styles.container}>
                  <MainScreen navigator={Navigator}/>
                  </View>
        );
      break;
      case 'info':
        return (
          <View style={styles.container}>
                  <InfoScreen navigator={Navigator}/>
                  </View>
        );
      break;
      case 'try':
        return (
          <View style={styles.container}>
                  <TryScreen navigator={Navigator}/>
                  </View>
        );
      break;
    }
  },

  render: function() {
    var initRoute = {name: 'home'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        configureScene={()=>Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.routeMapper}
       />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('reactNative', () => reactNative);
