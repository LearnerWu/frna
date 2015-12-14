'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,

  // NavigatorIOS
} = React;

var _ScreenNavigator;
var MainScreen = require('./MainScreen');

// var InfoScreen = require('./InfoScreen');
// var TryScreen = require('./TryScreen');

var reactNative = React.createClass({

  routeMapper: function(route, navigatorOperation, onComponentRef) {
    _ScreenNavigator = navigatorOperation;
    switch (route.name) {
      case 'main':
        return (
          <View style={styles.container}>
                  <MainScreen navigator={navigatorOperation}/>
                  </View>
        );
      break;
      case 'info':
        return (
          <View style={styles.container}>
                  <InfoScreen navigator={navigatorOperation}/>
                  </View>
        );
      break;
      case 'try':
        return (
          <View style={styles.container}>
                  <TryScreen navigator={navigatorOperation}/>
                  </View>
        );
      break;
    }
  },

  render: function() {
    var initRoute = {name: 'main'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initRoute}
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
