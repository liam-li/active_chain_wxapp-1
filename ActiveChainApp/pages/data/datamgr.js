// pages/data/datamgr.js
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isUserAuth: false,
    userInfo: {},
    dateFrom: '',
    dateTo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var df = new Date()
    var dt = new Date()
    df.setDate(df.getDate() - 7)
    this.setData({
      dateFrom: util.formatDate(df),
      dateTo: util.formatDate(dt)
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
    this.setData({
      userInfo: app.globalData.userInfo,
      isUserAuth: app.globalData.isUserAuth
    })
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

  returnMainUI: function(e) {
    wx.switchTab({
      url: '../main/mainui',
    })
  },

  dateFromChange: function(e){
    this.setData({
      dateFrom: e.detail.value
    })
  },

  dateToChange: function(e){
    this.setData({
      dateTo: e.detail.value
    })
  }
})