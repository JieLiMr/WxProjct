// pages/saomafankui/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        defaultData: {
            title: "反馈问题", // 导航栏标题
        },
        SchoolId:'',
        SchoolTittle:'',
        issuseList:{}
    },
getSchoolInfor(Schoolid)
{
    var tsh=this;
  wx.request({
    url: 'https://ezsjyjspy.com:5000/api/SchoolInfor/GetOneInfo?id='+this.data.SchoolId,
    method:'GET',
    success(res)
    {
        var obj=res.data.data;
       tsh.setData({SchoolTittle:obj.data.schoolName})
       wx.setStorage({
        key:"SchoolName",
        data:obj.data.schoolName
      })
    }
  })
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({SchoolId:options.SchoolId});
        this.showList();
        this.getSchoolInfor();
        console.log('显示问题')

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    topath(res)
    {
      var id = res.currentTarget.dataset.id;
      var name = res.currentTarget.dataset.name;
      // 使用参数进行操作
      console.log(id);
       wx.navigateTo({
         url: '/pages/QuestionIndex/index?Qid='+id+'&Tille='+name+'&SchoolName='+this.data.SchoolTittle,
       })
    },

    showList()
    {
        var tsh=this;
        wx.request({
            url: 'https://ezsjyjspy.com:5000/api/IssueManagement/GetManyInfo',
            method: 'GET',

            success: function (res) {          
                var obj=res.data;  
                tsh.setData({   
                        issuseList:obj.data.data 
             })
             console.log(tsh.data.issuseList);
             
              // 在这里处理后台返回的用户信息
            }
          })
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