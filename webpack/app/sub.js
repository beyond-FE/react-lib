/*//我们这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "我是h2";
    return element;
    alert("我是sub的方法");
}
var obj = {
	init : function(){
		alert("我是sub_dx");
	}
};
// module.exports 只能输出一次
module.exports = obj;
alert("我是sub普通代码");*/


export default function() {
  var element = document.createElement('h2');
  element.innerHTML = "H808";
  return element;
}