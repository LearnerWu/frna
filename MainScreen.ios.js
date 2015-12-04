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
// var HomeContent = require('./HomeContent');
// var DynamicContent = require('./DynamicContent');
// var ProductContent = require('./ProductContent');
// var ExampleContent = require('./ExampleContent');
// var AboutContent = require('./AboutContent');
// var DataRepository = require('./Repository');

// var repository = new DataRepository();
var headerPicUrl='http://facebook.github.io/react/img/logo_og.png';
var _navNavigator;
var dataCache = {
  nav: [
    {
      name: '首页'
  },
  {
    name: '动态'
  },
  {
    name: '产品'
  },
  {
    name: '案例'
  },
  {
    name: '关于'
  }
  ]
};

var MainScreen = React.createClass({
  getInitialState: function() {
    return null;
  },

  componentWillUnmount: function() {
    // repository.saveNews(dataCache.news);
  },

  componentDidmount: function() {
    // this.fetchNews(true);
  },

  render: function() {
    return (
      // dataSource.getRow()
      // ? <View style={styles.contentEmpty}>
      //     <Text>{this.state.isLoading
      //         ? '正在加载...请稍候'
      //         : '加载失败'}
      //     </Text>
      //   </View>:

      <View style={styles.screenContainer}>
      <View style={styles.header}>
      <Image
      style={styles.headerPic}
      source={{uri: headerPicUrl}}
      resizeMode='cover'
      />
      </View>
      <View style={styles.mainContent}>
      <MainScreenTabbar
      />
      </View>
      <View style={styles.footer}>
      <Text>
      这里是footer
      </Text>
      </View>
      </View>
    );
  },

  // fetchNews: function(isRefresh) {
  //   // if (isRefresh) {
  //   // repository.fetchTodayNews().then((responseData) => {
  //   //   dataCache.news = responseData;
  //   // }).catch((error) => {
  //   //   console.log(error);
  //   // }).done();
  //   // } else {
  //   //   return dataCache.news;
  //   // };
  //   this.setState({
  //     navDataSource: dataCache
  //   })
  // },

  // selectNav: function(nav: object) {
  //   nav.selected = true;
  //   this.props.navigator.push({
  //     name: nav.name
  //   });
  // },
  //
  _renderHeader: function(
    nav:object
  ) { // 这里是nav
    return (
      // <View style={styles.listHeader}>
      // <Image />
      // <ListView
      // onSelect = {() => this.selectNav(nav)}
      // nav={nav}
      // renderRow={this.renderNav}
      // />
      // </View>
      <View style={styles.listHeader}>
      <Text>
      header
      </Text>
      </View>
    );
  },
  //
  // renderNav: function () {
  //
  // },
  //
  _renderFooter: function() { // 这里是底部
    return (
      <View style={styles.listFooter}>
      <Text>
      这里是footer
      </Text>
      </View>
    );
  },
  //
  // contentMapper: function (route, navigationOperation, onComponentRef) {
  //   _navNavigator = navigationOperation;
  //   switch (route.name) {
  //     case 'homeContent':
  //     return (
  //       <View style={styles.contentWrapper}>
  //       <HomeContent navigator={navigationOperation}/>
  //       </View>
  //     );
  //     break;
  //     case 'dynamicContent':
  //     return (
  //       <View style={styles.contentWrapper}>
  //       <DynaticContent navigator={navigationOperation} />
  //       </View>
  //     );
  //     break;
  //     case 'productContent':
  //     return (
  //       <View style={styles.contentWrapper}>
  //       <ProductContent navigator={navigationOperation}/>
  //       </View>
  //     );
  //     break;
  //     case 'exampleContent':
  //     return (
  //       <View style={styles.contentWrapper}>
  //       <ExampleContent navigator={navigationOperation}/>
  //       </View>
  //     );
  //     break;
  //     case 'aboutContent':
  //     return (
  //       <View style={styles.contentWrapper}>
  //       <AboutContent navigator={navigationOperation}/>
  //       </View>
  //     );
  //   }
  // },
  //
  _renderRow: function() {
    return (
      // <Navigator
      // style={styles.container}
      // initialRoute={{name: 'homeContent'}}
      // configureScene={() => Navigator.SceneConfigs.FadeAndroid}
      // renderScene={this.contentMapper}
      // />
      <View style={styles.row}>
      <Text>
      row
      </Text>
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
