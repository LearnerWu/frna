var React = require('react-native');

var {
  AsyncStorage,
} = React;

var API_NEWS_URL = 'http://localhost:8888';
var KEY_NEWS = '@news';

function DataRepository() {
  if (typeof DataRepository.instance === 'object') {
    return DataRepository.instance;
  }

  DataRepository.instance = this;
};

DataRepository.prototype._fetch = function(reqUrl : string) {
  return new Promise((resolve, reject) => {
    fetch(reqUrl)
    .then((response) => response.json())
    .then((responseData) => {
      resolve(responseData);
    }).catch((err) => {
      console.log(err);
      resolve(null);
    });
  });
};

DataRepository.prototype._store = function(key: string) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key, (error, result) => {
      var retData = JSON.parse(result);
      !!error ? resolve(null) : resolve(retData);
    });
  });
};

DataRepository.prototype._formateTime = function(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDay();
  var date = date.getDate();
  return '' + year + month + day + date;
};

DataRepository.prototype.fetchNews = function(date?: Date,
  callback?: ?(error: ?Error, result: ?Object) => void) {
  var reqUrl = null;
  var date = date || new Date();
  var formatedDate = this._formateTime(date);
  var localStorage = this._store(KEY_NEWS + formatedDate);
  var netWork = this._fetch(API_NEWS_URL);
  var mergedPromise = new Promise((resolve, reject) => {
    Promise.all([localStorage, netWork])
    .then((values: array) => {
      if (values) {
        callback && callback(values);
        resolve(values);
      }else {
        var error = new Error('storage error');
        reject(error);
      }
    });
  });
};
