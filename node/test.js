var koa = require('koa');
var route = require('koa-route');
var logger = require('koa-logger');

var app = koa();

var testData = {
  product: [
    {
      title: '这是第一个测试',
      image: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
    },
    {
      title: '这是第二个测试',
      image: 'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj22d_Mo8HJAhUmLKYKHd0yBUYQjRwIBw&url=https%3A%2F%2Fwww.iconfinder.com%2Fsearch%2F%3Fq%3Dhome&psig=AFQjCNFQlbSKlv6Bq11BR9nBTQo1PxGGew&ust=1449286636891476',
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
      image: 'http://img4.tgbusdata.cn/v2/thumb/jpg/MDYzZSw3MDAsMTAwLDQsMywxLC0xLDEs/u/shouji.tgbus.com/uploads/allimg/1408/26/3170-140R61H958.jpg',
      title: '这是top_news的第一个测试',
      id: 7571008,
    },
    {
      image:'http://facebook.github.io/react/img/logo_og.png',
      title: '这是top_news的第二个测试',
      id: 2,
    },
    {
      image:'http://facebook.github.io/react/img/logo_og.png',
      title: '这是top_news的第三个测试',
      id: 3,
    },
    {
      image:'http://facebook.github.io/react/img/logo_og.png',
      title: '这是top_news的第四个测试',
      id: 3,
    },
  ],
};

app.use(logger());

app.use(route.get('/', getNews));

function *getNews() {
  this.body = testData;
};

app.listen(8888);
console.log('listening on port 8888');
