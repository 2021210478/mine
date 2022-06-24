const app = getApp()


// pages/todo/todo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        todos:[],
        name: '',
        time:'',
        date:'',
        form: false
    },
    /*1、获取文本框的值*/
    inputVal(event){
        // console.log(event.detail.value)
        //将文本框的值赋值给data的val
        this.setData({val:event.detail.value})
    },
    /*2、点击添加事件，将文本框的值push到todos数组中*/
    formAdd(){
        this.setData({form:true})
    },
    /*3、删除事件*/
    valDel(event){
        //获取删除的index
        // console.log(event);
        let index=event.target.dataset.index
        // console.log(index);
        let todos=this.data.todos
        todos.splice(index,1)
        this.setData({todos})
        //提示：删除成功
        wx:wx.showToast({
          title: '删除成功',
          duration: 2000,
          icon: 'success',
        })
    },
    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          date: e.detail.value
        })
      },
      bindTimeChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          time: e.detail.value
        })
      },
      formSubmit: function (e) {
          console.log(e)
        this.setData({
           name:e.detail.value.input,
           date:e.detail.value.date,
           time:e.detail.value.time,
           form:false
        })   
        console.log(this.data)
        let todos=this.data.todos
        var val=[]
        val.push(this.data.name,this.data.date,this.data.time)
        todos.push(val)
        console.log(todos)
        this.setData({todos,name:'',date:'',time:''})
        console.log(todos)
        //提示：添加成功
        wx:wx.showToast({
          title: '添加成功',
          duration: 2000,
          icon: 'success',
        })
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
      },
      formReset: function () {
        console.log('form发生了reset事件')
        this.setData({form:false})
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
