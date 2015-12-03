var React = require('react-native');

var {View, Text, ListView, Platform, TouchableHighlight, TouchableNativeFeedBack} = React;

var DynamicContent = React.createClass({
  render: function () {
    var TouchableElement = Platform.OS === 'android'
    ? TouchableHighlight
    : TouchableElement;
    return (
      <TouchableElement>
      </TouchableElement>
    );
  }
});

module.exports = DynamicContent;
