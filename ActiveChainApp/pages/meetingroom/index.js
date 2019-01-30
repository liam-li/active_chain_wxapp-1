// pages/meetingroom/index.js
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    index: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    date_names: [
      '2019-01-30 星期三/今天', '2019-01-31 星期四/明天', '2019-02-01 星期五/后天', '2019-02-02 星期六', '2019-02-03 星期日', '2019-02-04 星期一', '2019-02-05 星期二'
    ],
    my_reserve:[
      { date:'2019-01-31', time:'上午',room:'C506',reason:'头脑风暴会'},
      { date: '2019-01-31', time: '下午', room: 'C506', reason: '头脑风暴会继续' },
      { date: '2019-01-31', time: '晚上', room: 'C506', reason: '特别长需要换行的头脑风暴会继续' }
    ]
  },

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  record_clicked(){
    console.log('记录被点击');
  },
  doReserve: function () {
    wx.showModal({
      title: '确定预定该会议室吗？',
      content: '点击确定完成预定该会议室',
    })
  },
  doShowReserve: function () {
    wx.showToast({
      title: '该会议室已经被小小齐预定，事由为吃饭睡觉打豆豆',
      icon: "none"
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
  onShareAppMessage: function() {

  }
})