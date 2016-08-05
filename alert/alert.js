/*

 * tableUI 0.1

 * Copyright (c) 2016 yuyafei http://maimai123.github.io/

 * Date: 2016-7-27

 * 使用tableUI可以方便地将表格提示使用体验。先提供的功能有奇偶行颜色交替，鼠标移上高亮显示

 */
(function($){
  $.fn.tableUI = function(options){
    var obj = $(this);
    obj.find("tr:odd").css({'backgroud':'#aaa'});
    var defaults = {
      'evenRowClass' : "evenRow",
      'oddRowClass' : "oddRow",
      'activeRowClass' : "activeRow"
    }
    var opts = $.extend(defaults,options);
    this.each(function(){
      var thisTable = $(this);
      $(thisTable).find("tr:even").addClass(opts.evenRowClass);
      $(thisTable).find("tr:odd").addClass(opts.oddRowClass);
      $(thisTable).find("tr").on("mouseover",function(){
        $(this).addClass(opts.activeRowClass);
      })
      $(thisTable).find("tr").on("mouseout",function(){

              $(this).removeClass(opts.activeRowClass);

          });
    });
  }


//弹出alert弹框
$.fn.alert = function(options){
  var dets = {
    Event : "click",
    msg : "hello world!"
  }
  var opts = $.extend(dets,options);
  var $this = $(this);
  $this.on( opts.Event ,function(e){
    alert(opts.msg);
  });
}
})(jQuery);
