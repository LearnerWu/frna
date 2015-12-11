
var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var HomeContent = require('./HomeContent');
var CaseContent = require('./CaseContent');
var AboutContent = require('./AboutContent');
var DynamicContent = require('./DynamicContent');
var ProductContent = require('./ProductContent');

var icon = {
  homeIcon: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
  dynamicIcon: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
  productIcon: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
  caseIcon: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
  aboutIcon: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
};

var TabBarCase = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'homeScreenTabBar',

  getInitialState: function() {
    return {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
    };
  },

  _renderContent: function(contentName: string, timeNow?: number) {
    switch (contentName) {
      case 'home':
      return (
        <View style={styles.tabContent}>
        <HomeContent />
        </View>
      );
      break;
      case 'dynamic':
      return (
        <View style={[styles.tabContent, {backgroundColor: 'red'}]}>
        <DynamicContent />
        </View>
      )
      break;
      case 'case':
      return (
        <View style={[styles.tabContent, {backgroundColor: 'red'}]}>
        <CaseContent />
        </View>
      )
      break;
      case 'about':
      return (
        <View style={[styles.tabContent, {backgroundColor: 'red'}]}>
        <AboutContent />
        </View>
      )
      break;
      case 'product':
      return (
        <View style={[styles.tabContent, {backgroundColor: 'red'}]}>
        <ProductContent />
        </View>
      )
      break;
    };
  },

  render: function() {
    var timeNow = new Date().getTime();
    return (
      <TabBarIOS
      tintColor="black"
      barTintColor="white"
      >
      <TabBarIOS.Item
      title="首页"
      icon={require('./images/home.png')}
      selectedIcon={require('./images/home.png')}
      selected={this.state.selectedTab === 'home'}
      onPress={() => {
        this.setState({
          selectedTab: 'home',
        });
      }}>
      {this._renderContent('home', timeNow)}
      </TabBarIOS.Item>
      <TabBarIOS.Item
      icon={require('./images/home.png')}
      selectedIcon={require('./images/home.png')}
      title="动态"
      badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
      selected={this.state.selectedTab === 'dynamic'}
      onPress={() => {
        this.setState({
          selectedTab: 'dynamic',
          notifCount: this.state.notifCount + 1,
        });
      }}>
      {this._renderContent('dynamic', timeNow)}
      </TabBarIOS.Item>
      <TabBarIOS.Item
      icon={require('./images/home.png')}
      selectedIcon={require('./images/home.png')}
      title="产品"
      selected={this.state.selectedTab === 'product'}
      onPress={() => {
        this.setState({
          selectedTab: 'product',
          presses: this.state.presses + 1
        });
      }}>
      {this._renderContent('product', timeNow)}
      </TabBarIOS.Item>
      <TabBarIOS.Item
      icon={require('./images/home.png')}
      selectedIcon={require('./images/home.png')}
      title="案例"
      selected={this.state.selectedTab === 'case'}
      onPress={() => {
        this.setState({
          selectedTab: 'case',
          presses: this.state.presses + 1
        });
      }}>
      {this._renderContent('case', timeNow)}
      </TabBarIOS.Item>
      <TabBarIOS.Item
      icon={require('./images/home.png')}
      selectedIcon={require('./images/home.png')}
      title="关于"
      selected={this.state.selectedTab === 'about'}
      onPress={() => {
        this.setState({
          selectedTab: 'about',
          presses: this.state.presses + 1
        });
      }}>
      {this._renderContent('about', timeNow)}
      </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  tabBarItem: {
    flex: 1
  }
});

module.exports = TabBarCase;
