//app.js
App({
  globalData: {
    isUserAuth: false,
    userInfo: null,
    appid: "wx5b455f3a9165c202",
    appsecret: "cba16baa627a79ae55c2ca1323237e27"
  },

  onLaunch: function() {
    var self = this
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     let authUrl = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + self.globalData.appid + '&secret=' + self.globalData.appsecret + '&js_code=' + res.code + '&grant_type=authorization_code';
    //     wx.request({
    //       url: authUrl,
    //       data: {},
    //       method: 'GET',
    //       success: res => {
    //         self.globalData.user.openid = res.data.openid;
    //       }
    //     })
    //   }
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          this.globalData.isUserAuth = true
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})