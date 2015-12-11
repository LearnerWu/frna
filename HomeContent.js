var React = require('react-native');

var {
  View,
  Text,
  ViewPager,
  ListView,
  Platform,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} = React;

var ViewPager = require('react-native-viewpager');
var cacheData = {
  product: [
    {
      title: '这是第一个测试',
      image: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
    },
    {
      title: '这是第二个测试',
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
var HomeContent = React.createClass({
  statics: {
    title: '<ListView> - Simple',
    description: 'Performant, scrollable list of data.'
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    var headerDs = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    });

    var dataSource = ds.cloneWithRowsAndSections(this._genRows(), ['product'], null);

    return {
      dataSource: dataSource,
      headerDataSource: headerDs.cloneWithPages(this.getHeaderData())
    };
  },

  getHeaderData:function () {
    return cacheData.topNews;
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

  _renderHeader: function () {
    return (
      <View style={styles.header}>
      <ViewPager
      dataSource={this.state.headerDataSource}
      renderPage={this._renderPage}
      style={styles.listHeader}
      isLoop={true}
      autoPlay={true}
      />
      </View>
    )
  },

  _renderPage:function (news: object, pageID: number | string) {
    return (
      <TouchableOpacity style={styles.page}>
      <Image
        source={{uri: news.image}}
        style={styles.headerImage}
      >
      <Text>
      {news.title}
      </Text>
      </Image>
      </TouchableOpacity>
    )
  },

  render: function() {
    return (
      <View
      noSpacer={true}
      noScroll={true}>
      <ListView
      dataSource={this.state.dataSource}
      renderSectionHeader={this._renderSectionHeader}
      renderRow={this._renderRow}
      renderHeader={this._renderHeader}
      />
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight style={styles.touchableElement}>
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
    dataBlob = cacheData;
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
  },
  row: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  newsImage:{
    width: 20
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  header: {
    flex: 1,
    height: 300
  },
  page: {
    justifyContent: 'center'
  }
});

module.exports = HomeContent;
