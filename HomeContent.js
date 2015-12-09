var React = require('react-native');

var {
  View,
  Text,
  ViewPager,
  ListView,
  Platform,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var cacheData = {
  time: 1449631956715,
  allNews: [
    {
      title: '这是第一个测试',
      sectionID: 'product',
      image: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
    },
    {
      title: '这是第二个测试',
      sectionID: 'dynamic',
      image: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476'
    },
  ],
  topNews:[
    {
      image:'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
      title: '这是top_news的第一个测试'
    },
    {
      image:'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
      title: '这是top_news的第二个测试'
    },
  ]
};


var THUMB_URLS = [
  'Thumbnails/like.png',
  'Thumbnails/dislike.png',
  'Thumbnails/call.png',
  'Thumbnails/fist.png',
  'Thumbnails/bandaged.png',
  'Thumbnails/flowers.png',
  'Thumbnails/heart.png',
  'Thumbnails/liking.png',
  'Thumbnails/party.png',
  'Thumbnails/poke.png',
  'Thumbnails/superlike.png',
  'Thumbnails/victory.png',
];
var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';
var hashCode = function(str) {
  var hash = 15;
  for (var i = str.length - 1; i >= 0; i--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
  }
  return hash;
};
var ViewPager = require('react-native-viewpager');
var PIC_URLS = ['data:image/jpeg;base64,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']; // logo在此

var HomeContent = React.createClass({
  statics: {
    title: '<ListView> - Simple',
    description: 'Performant, scrollable list of data.'
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  _renderSectionHeader: function (sectionData: string, sectionID: number | string) {
    return (
      <Text style={styles.sectionHeader}>
      {this.getSectionTitle(sectionID)}
      </Text>
    )
  },

  getSectionTitle: function (sectionID: number | string) {
    switch (sectionID) {
      case 'product':
      return '产品';
      break;
      case 'dynamic':
      return '动态';
      break;
    }
  },

  render: function() {
    return (
      <View
      title={this.props.navigator ? null : '<ListView> - Simple'}
      noSpacer={true}
      noScroll={true}>
      <ListView
      dataSource={this.state.dataSource}
      renderSectionHeader={this._renderSectionHeader}
      renderRow={this._renderRow}
      />
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight style={styles.touchableElement} onPress={()=>this._pressRow(rowID, sectionID)}>
      <View style={styles.row}>
      <Image source={{uri: rowData.image}} style={styles.newsImage} />
      <Text style={styles.text}>
      {rowData.title}
      </Text>
      </View>
      </TouchableHighlight>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    dataBlob = cacheData.allNews;
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },
});

var styles = StyleSheet.create({
  touchableElement:{
    flex: 1
  },
  sectionHeader:{
    flex: 1,
    backgroundColor: 'red'
  },
  row: {
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

module.exports = HomeContent;
