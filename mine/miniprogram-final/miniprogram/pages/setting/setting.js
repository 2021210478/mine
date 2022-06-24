var app = getApp()

Page({
    data:{
        ifMusic:true
    },

    onShow: function() {
      wx.setNavigationBarTitle({
        title: '设置'
      })
      this.setData({
          workTime: wx.getStorageSync('workTime'),
          restTime: wx.getStorageSync('restTime')
      })
    },
    changeWorkTime: function(e) {
        wx.setStorage({
            key: 'workTime',
            data: e.detail.value
        })
    },
    changeRestTime: function(e) {
        wx.setStorage({
            key: 'restTime',
            data: e.detail.value
        })
    },
    
    chooseBackgroundPic:function(e){
        var that=this
        wx.chooseImage({
          count: 1,
          type:'file',
          success (res) {
            // tempFilePath可以作为 img 标签的 src 属性显示图片
          }
        })
    },

    switchChange:function(e){
        var that=this
        var music=this.data.ifMusic
        if(music==false) 
        {
            this.setData(this.data.ifMusic=true)
            app.globalData.musicBool=true
        }
        else
        {
            this.setData(this.data.ifMusic=false)
            app.globalData.musicBool=false
        }
    }
  })
  