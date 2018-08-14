// pages/main/mainui.js
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      isUserAuth: getApp().globalData.isUserAuth
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  goAelfIo: function() {
    wx.navigateTo({
      url: '../web/webview?url=https://aelf.io',
      fail: function() {},
      complete: function() {}
    });
  },

  bindGetUserInfo: function(e){
    console.log(e.detail.userInfo)
    console.log(e.detail.encryptedData)
    console.log(e.detail.iv)
  }
})