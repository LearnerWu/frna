'use strict';

// 所有涉及的状态操作都在这一层
var React = require('react-native');

var {
  AsyncStorage,
  Image,
  Text,
  View,
  Navigator,
  StyleSheet,
} = React;

var MainScreenTabbar = require('./MainScreenTabbar');

var headerPicUrl='http://facebook.github.io/react/img/logo_og.png';
var MainScreen = React.createClass({
  getInitialState: function() {
    return null;
  },

  render: function() {
    return (
      <View style={styles.screenContainer}>
      <View style={styles.header}>
      <Image
      style={styles.headerPic}
      source={{uri: headerPicUrl}}
      resizeMode='cover'
      />
      </View>
      <MainScreenTabbar/>
      <View style={styles.footer}>
      <Text>
      这里是footer
      </Text>
      </View>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
  },
  header: {
    height: 40,
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    height: 30,
  },
  headerPic:{
    flex: 1,
    height: 10
  }
});

module.exports = MainScreen;
