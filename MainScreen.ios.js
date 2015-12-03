'use strict';

// 所有涉及的状态操作都在这一层
var React = require('react-native');

var {
  AsyncStorage,
  Image,
  Text,
  View,
  ListView,
  Navigator,
  StyleSheet,
} = React;

// var HomeContent = require('./HomeContent');
// var DynamicContent = require('./DynamicContent');
// var ProductContent = require('./ProductContent');
// var ExampleContent = require('./ExampleContent');
// var AboutContent = require('./AboutContent');
// var DataRepository = require('./Repository');

// var repository = new DataRepository();
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
    var navDataSource = new ListView.DataSource({
      navHasChanged: (nav1, nav2) => nav1 !== nav2
    });
    return {
      // isLoading: false,
      // isLoadingTail: false,
      navDataSource: navDataSource,
      // headerDataSource: headerDataSource,
    };
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
      // <ListView
      // ref='MainScreen'
      // style={styles.list}
      // dataSource={this.state.navDataSource}
      // renderHeader={this._renderHeader}
      // renderRow={this._renderRow}
      // renderFooter={this._renderFooter}
      // />
      <View style={styles.header}>
      <Text>
      这里是header
      </Text>
      </View>
      <View style={styles.mainContent}>
      <Text>
      这里是content
      </Text>
      </View>
      <View style={styles.footer}>
      <Text>
      这里是footer
      </Text>
      </View>
    )
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
  // _renderHeader: function(
  //   nav:object
  // ) { // 这里是nav
  //   return (
  //     <View style={styles.container}>
  //     <Image />
  //     <ListView
  //     onSelect = {() => this.selectNav(nav)}
  //     nav={nav}
  //     renderRow={this.renderNav}
  //     />
  //     </View>
  //   );
  // },
  //
  // renderNav: function () {
  //
  // },
  //
  // _renderFooter: function() { // 这里是底部
  //   return (
  //     <View style={styles.footerContainer}>
  //     <Text>
  //     这里是footer
  //     </Text>
  //     </View>
  //   );
  // },
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
  // _renderRow: function() {
  //   return (
  //     <Navigator
  //     style={styles.container}
  //     initialRoute={{name: 'homeContent'}}
  //     configureScene={() => Navigator.SceneConfigs.FadeAndroid}
  //     renderScene={this.contentMapper}
  //     />
  //   );
  // }
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  header: {
    flex: 1
  }
})

module.exports = MainScreen;
