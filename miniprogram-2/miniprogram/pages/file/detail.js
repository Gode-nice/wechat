var list=[]
var list_
var content
var translation
var remark
var shangxi
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
    wx.showLoading({
      title: '马上就有诗来',
    })
    wx.cloud.init()
    console.log(options.name)
    const db = wx.cloud.database()
    db.collection('yang_poetry').where({
      title: options.name
    }).get({
      success: res => {
        // if (res.data[0].translate==null){
        //   var translate="暂无翻译"
        // }else{
        //   var translate= res.data[0].translate
        // }
        content = res.data[0].content.split("\\n")
        translation = res.data[0].translation.split("\\n")
        remark = res.data[0].remark.split("\\n")
        shangxi = res.data[0].shangxi.split("\\n")
        this.setData({
          title:res.data[0].title,
          dynasty: res.data[0].dynasty,
          author: res.data[0].writer,
          list : content,
          list_:"content"
        })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  change: function (res) {
    console.log(res.currentTarget.id)
    var i = res.currentTarget.id
    if(i==1){
      list = content,
        list_ ="content"
    }else if(i==2){
      list = translation,
        list_ = "translation"
    }else if(i==3){
      list = remark,
        list_ = "remark"
    }else if(i==4){
      list = shangxi,
        list_ = "shangxi"
    }else{
      list = content,
        list_ = "content"
    }
    this.setData({
      list,
      list_
    })
  },
  onShareAppMessage: function () {

  }
})