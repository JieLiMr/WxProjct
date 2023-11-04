const app = getApp()

function request(options) {
  const { url, data, method } = options
  return new Promise((resolve, reject) => {
    wx.request({
      url: app.globalData.baseURL + url,
      data,
      method,
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
module.exports = {
  request
}