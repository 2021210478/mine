var amapFile = require('../../utils/amap-wx.130.js');
var config = require('../../utils/config.js');

Page({
  data: {
    weather: {}
  },
  onLoad: function() {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key: key});
    myAmapFun.getWeather({
      success: function(data){
        that.setData({
          weather: data
        });
      },
      fail: function(info){
        // wx.showModal({title:info.errMsg})
      }
    })
  }
})