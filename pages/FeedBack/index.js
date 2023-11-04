// pages/saomafankui/index.js
Page({
    data: {
        defaultData: {
            title: "反馈问题", // 导航栏标题
        },
       
            array: ['第一项','第二项','第三项'],
    
        FeedBackMsg:'',
        Qid:'',
        Qname:''
    },
    onTextareaInput: function(event) {
      this.setData({
        FeedBackMsg: event.detail.value
      });
    },
    submitForm()
    {  
      wx.showModal({
        title: '提交成功',
        showCancel:false,
        content: '我们会根据您的反馈进行核实，处理 结果会以微信通知您!',
        success (res) {
          if (res.confirm) {
          wx.navigateTo({
            url: '/pages/shouye/index',
          })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      
      
    },
    uploadFile()
    {
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })               
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({Qid:options.id});
      this.setData({Qname:options.name})
    
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