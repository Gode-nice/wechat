var list=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    list = []
    this.setData({
      author: options.name
    })
    wx.showLoading({
      title: '马上就有诗来',
    })
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('yang_poetry').where({
      writer: options.name
    }).get().then(res => {
      for (var i = 0; i < res.data.length; i++) {
        list.push(res.data[i].title);}
    }).then(res => {
      this.setData({
        list
      })
      wx.hideLoading()
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