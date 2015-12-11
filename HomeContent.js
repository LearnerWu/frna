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
  dynamic:[
    {
      title: '这是第一个测试',
    },
    {
      title: '这是第二个测试',
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

    var dataSource = ds.cloneWithRowsAndSections(this._genRows(), ['product', 'dynamic'], null);

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
      source={{uri: 'http://c.hiphotos.baidu.com/zhidao/pic/item/b151f8198618367a48b031d22e738bd4b31ce580.jpg'}}
      style={styles.headerImage}
      >
      <View style={styles.pageTextContainer}>
      <Text>
      {news.title}
      </Text>
      </View>
      </Image>
      </TouchableOpacity>
    )
  },

  render: function() {
    return (
      <View
      noSpacer={true}
      noScroll={true}
      style={styles.mainScreen}
      >
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
      <TouchableHighlight onPress={() => this._pressRow(sectionID, rowID)}>
      <View style={styles.row}>
      <Image source={require('./images/home.png')} style={styles.newsImage} />
      <Text>
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

  _pressRow: function(sectionID: string, rowID: number) {
    var data = cache[sectionID[rowID]];
    this.props.navigator.push({
      title: data.title
    })
  },
});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(241, 241, 241)',
  },
  sectionHeader:{
    backgroundColor: 'rgb(211, 214, 201)'
  },
  page: {
    flex: 1,
    height: 300,
    justifyContent: 'center'
  },
  headerImage:{
    flex: 1,
    flexDirection: 'row'
  },
  pageTextContainer: {
    flex: 1,
    alignSelf: 'center'
  }
});

module.exports = HomeContent;
