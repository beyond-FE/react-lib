/*var sub = require('./sub');
//var $ = require('jquery');
import './plugin.js';
//require('./main.css');
require('./main.less');
// 调用 sub方法
sub.init();
// 使用 jquery
$("body").append("<div class='mDiv'>我是div</div>");


myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
  //call our jquery plugin!
  $('p').greenify();
});*/


import './main.less';
import generateText from './sub';
//import $ from 'jquery';
import './plugin.js';
import moment from 'moment';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
  $('p').greenify();
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());



