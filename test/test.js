
seajs.config({
  alias: {
      'backbone' : 'backbone/0.9.2/backbone-debug',
      'underscore' : 'underscore/1.3.3/underscore-debug',
      '$' : 'zepto/1.0.0/zepto-debug',
      'events' : 'events/events'
  },
  debug: 1
});



define(function(require){
  var backbone = require('backbone');
  var _ = require('underscore');
  var object = {};
  _.extend(object, backbone.Events);
  object.on("alert", function(msg) {
    alert("Triggered " + msg);
  });
  object.trigger("alert", "an event");
  var test = backbone.Model.extend({
    defaults : {
	  'a' : 'pigcan',
	  'b' : 'wanyan is a pig'
    }	
  });
  var t = new test;
  t.on('change:b',function(){
	alert('完颜变身啦！');
  })
  t.set({b:'wanyan is not a pig'});
  
  t.trigger('change:b');
  console.log(t);
});