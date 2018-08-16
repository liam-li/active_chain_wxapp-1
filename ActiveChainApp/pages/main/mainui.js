// pages/main/mainui.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isUserAuth: false,
    sportType: {},
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sportType: app.globalData.sportType
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        isUserAuth: app.globalData.isUserAuth
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        app.globalData.userInfo = res.userInfo
        app.globalData.isUserAuth = true
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
  },

  onTapSportType: function(e) {
    if(!this.data.isUserAuth){
      wx.showToast({
        title: '操作失败，请点击【授权登录】后进行操作！',
        icon: 'none',
        duration: 3000
      });
    }else{
      console.log(e)
    }
  }
})