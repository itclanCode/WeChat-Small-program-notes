// pages/about/about.js
// 引入地图插件
let plugin = requirePlugin("myPlugin");

let routeInfo = {
  //startLat: 39.90469,    //起点经度 选填
  //startLng: 116.40717,    //起点纬度 选填
  startName: "currentLocation",   // 起点名称 选填
  endLat: 40.06106803225973,    // 终点经度必传
  endLng: 116.46250200000001,  //终点纬度 必传
  endName: "北京勇瑞基业商贸有限公司",  //终点名称 必传
  mode: "car"  //算路方式 选填
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    routeInfo: routeInfo,
    imgUrls: [    // banner图
      "http://i.epochtimes.com/assets/uploads/2010/04/1004050730211917.jpg",
      "http://sucimg.itc.cn/sblog/o78e844cf5fd638d40c2325b3dd2bb0b0",
      "http://www.lidajituan.com/upload/2013/11/8111042640.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXx3CwzwIlsOcwlRLm9iI-NiAZ-cjrZwj4cpGAPR8Ih5FnL8l5Xg",
      "http://www.haoyadoors.com/uploadfile/20168905953613.jpg",
      "http://img13.3lian.com/201401/14/3a5ea6292afe0925367e51a2121e0459.jpg"
    ],
    indicatorDots: true,           // 是否显示指示点
    indicatorColor: "rgba(0,0,0,.3)",  // 指示点颜色
    indicatorActiveColor: "#18D1D1",  // 当前选中的指示点颜色
    autoplay: false,                        // 是否自动切换
    interval: 3000,                         // 自动切换时间间隔
    duration: 1000,                      // 滑动动画时长
    circular: true                          // 是否采用衔接滑动
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
  // 拨打电话
  callphone:function(){
    wx.makePhoneCall({
      phoneNumber: '13701134148',
    })
  },
  // 回到首页
  callbackIndex:function(){
    wx.switchTab({
      url: "/pages/index/index",
    })
  }
})