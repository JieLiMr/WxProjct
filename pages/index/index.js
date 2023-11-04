// index.js
const app = getApp();
const { request } = require('../../utils/request.js')
Page({
    data: {
        // 组件参数设置，传递到组件
        defaultData: {
            title: "我的主页", // 导航栏标题
        },
        videoUrl: ''
    },
    onLoad() {
     console.log('App');
     console.log(app);
    },
    getPhoneNumber (e) {
      console.log(e.detail.code)  // 动态令牌
      console.log(e.detail.errMsg) // 回调信息（成功失败都会返回）
      console.log(e.detail.errno)  // 错误码（失败时返回）
      request({
        url: '/api/WxApp/getPhoneInfo',
        data: { code: e.detail.code },
        method: 'Get'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    },
    gettest()
    {
      var code='ad72e828465a6910c9ffb46c4a1d006021e7be687e83ff19266d0638a608dc98';
      request({
        url: '/api/WxApp/getPhoneInfo',
        data: { code: code },
        method: 'Get'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    },
    takePhoto()
    {
      
        wx.chooseImage({
            success (res) {
                console.log(res)
              const tempFilePaths = res.tempFilePaths
              wx.uploadFile({
                url: 'https://localhost:5001/api/Image/UploadPhoto', //仅为示例，非真实的接口地址
                filePath: tempFilePaths[0],
                name: 'file',
                formData: {
                  'user': 'test'
                },
                success (res){
                  const data = res.data
                  //do something
                }
              })
            }
          })
    },
    getInfo(){
      wx.login({           
        success: function (loginRes) {
          wx.request({
            url: 'https://localhost:5001/api/IssueManagement/Post',
            method: 'POST',
            data: {
              code: loginRes.code,
         
            },
            success: function (res) {
              console.log(res.data);
              // 在这里处理后台返回的用户信息
            }
          })
        }
      })
      
       },
      
sendMsg()
{
    wx.request({
        url: 'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=74_ewdYjhARVbTnq5rg4UQddVMQmW1ODKpA1gFCUfbuVmlYAjDESCbxrWjpnFWLWAU0shhgtIAgrSTNX99V4_35qyNP7KXOl4zkmDzEuML6q5V0xYzaZl-nhiZwYwgXLBbAEAIWM',
        method: 'POST',
        data: {
          touser: 'oj2qg68zfEudcNABXKrXgHljAfoc', // 替换为实际的用户OpenID
          msgtype: 'text',
          text: {
            content: 'Hello, World!' // 替换为实际的消息内容
          }
        },
        success: function (res) {
          console.log('消息发送成功');
          console.log(res)
        },
        fail: function (res) {
          console.log('消息发送失败：' + res.errMsg);
        }
      });
}
   
})
