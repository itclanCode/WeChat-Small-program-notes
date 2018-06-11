// 
/*
   @pages/help/help.js
    @pages/calindex/calindex.wxss 
    @author suibichuanji
    @date    2018-05-18 08:02:33
    @weChatPublicId (itclanCoder)
    @PersonWeChatId (suibichuanji)
     @PersonQQ (1046678249)
    @dec 使用帮助主要js逻辑
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  navigateBack: function () {  // 返回跳转到主页面
    wx.redirectTo({
      url: '../calindex/calindex'
  })
  },
  goZan:function(e){    // 去点赞
    console.log(e);
     wx.navigateTo({

     })
  }
})