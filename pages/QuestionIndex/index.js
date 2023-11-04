// pages/saomafankui/index.js
Page({
    data: {
        defaultData: {
            title: "反馈问题", // 导航栏标题
        },
        QuestionList:{},
        Tille:'',
        SchoolTittle:''
    },
    topath()
    {
      var id = res.currentTarget.dataset.id;
      var name = res.currentTarget.dataset.name;
  wx.navigateTo({
    url: '/pages/FeedBack/index',
  })
    },
    getlist()
    {
      var tsh=this;
      wx.request({
        url: 'https://ezsjyjspy.com:5000/api/IssueManagement/GetPidList?Pid=2',
        method:'GET',
        success(res)
        {    
          var obj=res.data;
          tsh.setData({QuestionList:obj.data.data})
        }
      })
      console.log("小问题")
      console.log(tsh.data.QuestionList)
    },
    onLoad: function (options) {
      var tsh=this;
      this.getlist();
      wx.getStorage({
        key: 'SchoolId',
        success (res) {
          tsh.setData({SchoolId:res.data})
        }
      })
   tsh.setData({Tille:options.Tille})
   tsh.setData({SchoolTittle:options.SchoolName})
   
    },
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