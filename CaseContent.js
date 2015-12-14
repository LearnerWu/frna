var React = require('react-native');

var {
  Text,
  View,
  ListView,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedBack,
} = React;

var CaseContent = React.createClass({
  render: function() {
    // return (
    //   <ListView
    //   ref='caseContent'
    //   renderRow={this._renderRow}
    //   renderHeader={this._renderHeader}
    //   renderFooter={this._renderFooter}
    //   />
    // );
    return (
      <View>
      </View>
    );
  },

  _renderRow: function() {
    var TouchableElement = Platform.OS === 'android'
    ? TouchableNativeFeedBack
    : TouchableHighlight;
    return (
      <TouchableElement
      onPress={this._onPress}
      >
      </TouchableElement>
    );
  },
});

module.exports = CaseContent;
