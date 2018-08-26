//app.js
App({
  globalData: {
    isUserAuth: false,
    userInfo: null,
    sportType: {
      "badminton": "羽球",
      "basketball": "篮球",
      "bicycle": "骑行",
      "football": "足球",
      "gym": "健身",
      "pingpong": "乒乓",
      "running": "跑步",
      "swimming": "游泳",
      "walking": "步行"
    },
  },

  onLaunch: function() {
    var self = this
    // 用户登录
    wx.login({
      success: function(res) {
        if (res.code) {
          console.log('jsCode - ' + res.code)
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          this.globalData.isUserAuth = true
          wx.getUserInfo({
            success: res => {
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