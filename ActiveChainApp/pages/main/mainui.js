// pages/main/mainui.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isUserAuth: false,
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
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        isUserAuth: app.globalData.isUserAuth
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          isUserAuth: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.isUserAuth = true
          this.setData({
            userInfo: app.globalData.userInfo,
            isUserAuth: app.globalData.isUserAuth
          })
        },
        fail: res => {
        }
      })
    }
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

  },

  goAelfIo: function () {
    wx.navigateTo({
      url: '../web/webview?url=https://aelf.io',
      fail: function () { },
      complete: function () { }
    });
  },

  bindGetUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.isUserAuth = true
    this.setData({
      userInfo: app.globalData.userInfo,
      isUserAuth: app.globalData.isUserAuth
    })
  }
})