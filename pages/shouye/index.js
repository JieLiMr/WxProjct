Page({
    data: {
    token:'',
    SchoolId:'',
    defaultData: {
      title: "鄂州市学校双评议", // 导航栏标题
  },
    },
    getPhoneNumber(e)
    {
      
      if(this.data.token=="")
      {
        this.getToken(e.detail.code);
        this.scanSchoolCode();
      }
      else
      {
        this.scanSchoolCode();
      }
    },
    scanSchoolCode()
    {   wx.scanCode({
        success (res) {
          wx.setStorage({
            key:"SchoolId",
            data:res.result
          })
    
         wx.navigateTo({
           url: '/pages/saomafankui/index?SchoolId='+res.result,
         })
        }
      })
    },

    getToken(phonecode)
    {
      wx.login({           
        success: function (loginRes) {
          var obj= {
            code: loginRes.code,
            phonecode:phonecode
          };
          wx.request({
            url: 'https://ezsjyjspy.com:5000/api/WxApp/WxLogin',
            method: 'POST',
            data: obj,
            success: function (res) {
              console.log(res.data);
              if(res.data.code==200)
              {
                wx.setStorage({
                  key:"token",
                  data:res.data.token
                })
              }
              // 在这里处理后台返回的用户信息
            }
          })
          var wxtoken='';
          wx.getStorage(
            {
              key:"token",
              success(res){
                console.log("打印token")
                console.log(res.data)
              }
            }
          )
        }
      })
    },
    getMsg()
    {
      console.log('二维码')
      wx.scanCode({
        success (res) {
          console.log(res)
        },
        fail(err)
        {
          console.log(err)
        }
      })
    }
,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.getStorage({
        key: "token",
        success(res) {
          this.data.token=res.data;
          console.log('data'+res.data.token)
        }
      })
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