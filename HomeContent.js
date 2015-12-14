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
  TouchableOpacity,
} = React;

var ViewPager = require('react-native-viewpager');
var DataRepository = require('./DataRepository');
var cacheData;

// var cacheData = {
//   product: [
//     {
//       title: '这是第一个测试',
//       image: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
//     },
//     {
//       title: '这是第二个测试',
//       image: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
//     },
//   ],
//   dynamic:[
//     {
//       title: '这是第一个测试',
//     },
//     {
//       title: '这是第二个测试',
//     },
//   ],
//   topNews:[
//     {
//       image: 'http://img4.tgbusdata.cn/v2/thumb/jpg/MDYzZSw3MDAsMTAwLDQsMywxLC0xLDEs/u/shouji.tgbus.com/uploads/allimg/1408/26/3170-140R61H958.jpg',
//       title: '这是top_news的第一个测试',
//     },
//     {
//       image:'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
//       title: '这是top_news的第二个测试',
//     },
//   ],
// };

var dataRepository = new DataRepository();

var HomeContent = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    var headerDs = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    return {
      dataSource: ds,
      headerDataSource: headerDs,
    };
  },

  componentDidMount: function() {
    var dataSource = null;
    dataRepository.fetchNews()
    .then((responseData) => {
      cacheData = responseData;
      dataSource = this.state.dataSource.cloneWithRowsAndSections(this._genRows(), ['product', 'dynamic'], null);
      this.setState({
        dataSource: dataSource,
        headerDataSource: this.state.headerDataSource.cloneWithPages(this.getHeaderData()),
      });
    });
  },

  getHeaderData:function() {
    return cacheData.topNews;
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  _renderSectionHeader: function(sectionData: string, sectionID: number | string) {
    return (
      <Text style={styles.sectionHeader}>
      {this.getSectionTitle(sectionID)}
      </Text>
    );
  },

  getSectionTitle: function(sectionID: number | string) {
    switch (sectionID) {
      case 'product':
        return '产品';
      break;
      case 'dynamic':
        return '动态';
      break;
    }
  },

  _renderHeader: function() {
    return (
      <View style={styles.header}>
      <ViewPager
      dataSource={this.state.headerDataSource}
      renderPage={this._renderPage}
      isLoop={true}
      autoPlay={true}
      />
      </View>
    );
  },

  _renderPage:function(news: object, pageID: number | string) {
    return (
      <TouchableOpacity style={styles.page}>
      <Image
      source={{uri: news.image}}
      style={styles.headerImage}
      >
      <View style={styles.pageTextContainer}>
      <Text>
      {news.title}
      </Text>
      </View>
      </Image>
      </TouchableOpacity>
    );
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
    var data = cacheData[sectionID[rowID]];
    switch (sectionID) {
      case 'dynamic':
        this.props.navigator.push({
        name: 'info',
        content: data,
      });
      break;
      case 'product':
        this.props.navigator.push({
        name: 'main',
        content: data,
      });
      break;
    }
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
    backgroundColor: 'rgb(211, 214, 201)',
  },
  page: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
  },
  headerImage:{
    flex: 1,
    flexDirection: 'row',
  },
  pageTextContainer: {
    flex: 1,
    alignSelf: 'center',
  },
});

module.exports = HomeContent;
