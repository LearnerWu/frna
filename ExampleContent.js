var React = require('react-native');

var {
  Text,
  View,
  ListView,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedBack,
} = React;

var ExampleContent = React.createClass({
  render: function () {
    return (
      <ListView
      ref='exampleContent'
      renderRow={this._renderRow}
      renderHeader={this._renderHeader}
      renderFooter={this._renderFooter}
      />
    );
  },
  _renderRow: function () {
    var TouchableElement = Platform.OS === 'android'
    ? TouchableNativeFeedBack
    : TouchableHighlight;
    return (
      <TouchableElement
      onPress={this._onPress}
      >
      </TouchableElement>
    );
  }
});

module.exports = ExampleContent;
