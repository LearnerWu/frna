var React = require('react-native');

var {
  Text,
  View,
  ListView,
  Image,
  StyleSheet,
} = React;

var headerPicUrl = 'http://facebook.github.io/react/img/logo_og.png';

var InfoScreen = React.createClass({
  getInitialState: function() {
    return null;
  },

  render: function() {
    return (
      <View>
        <View style={styles.headerImg}>
        <Image
          source={{uri: headerPicUrl}}
          style={styles.topImage}
          resizeMode='cover'
          />
        </View>
        <Text>
          fjdklas
        </Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  topImage: {
    flex: 1,
  },
  headerImg:{
    height: 30,
  },
});

module.exports = InfoScreen;
