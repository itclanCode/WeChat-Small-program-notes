//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      imgUrls:[    // banner图
"http://yruijy.com/img/bannerImg/01%E5%8B%87%E7%91%9E%E9%92%A2%E6%9E%84.png",
  "http://yruijy.com/img/bannerImg/02%E5%8B%87%E7%91%9E%E9%92%A2%E6%9E%84.png",
          "http://yruijy.com/img/bannerImg/03%E5%8B%87%E7%91%9E%E9%92%A2%E6%9E%84.png",
          "http://yruijy.com/img/bannerImg/04%E5%8B%87%E7%91%9E%E9%92%A2%E6%9E%84.png",
          "http://yruijy.com/img/bannerImg/05%E5%8B%87%E7%91%9E%E9%92%A2%E6%9E%84.png"
      ],
      indicatorDots: true,           // 是否显示指示点
      indicatorColor:"rgba(0,0,0,.3)",  // 指示点颜色
      indicatorActiveColor:"#18D1D1",  // 当前选中的指示点颜色
      autoplay: true,                        // 是否自动切换
      interval: 3000,                         // 自动切换时间间隔
      duration: 1000,                      // 滑动动画时长
      circular: true                          // 是否采用衔接滑动
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 分享
  onShareAppMessage:function(res){
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '勇瑞钢构',
        path: '/pages/index/index',         imageUrl:"/pages/asset/images/indextopbanner/01勇瑞钢构.png"
      }
  },
  // 点击导航栏进行跳转,点击关于我们跳转到关于我们页面
  jumpabout:function(e){
         console.log(e);
         wx.switchTab({
           url: '/pages/about/about',    // 跳转到tabbar页面
         })
  },
  // hujiao
  callphone:function(){
      wx.makePhoneCall({
        phoneNumber: '13701134148',
      })
  },
  // 跳转走进钢结构 
  jumpsteel:function(e){
     console.log(e);
     wx.navigateTo({
       url: '/pages/walksteel/walksteel',   // 后面可不写wxml后缀
     })
  },
  // 查看更多,走进钢结构
  watchwalksteel:function(){
       wx.navigateTo({
         url: '/pages/walksteel/walksteel',
       })
  },
  // 点击底部作者,跳转到作者
  jumpauthor:function(e){
    console.log(e);
     wx.navigateTo({
       url: '/pages/authorpage/authorpage',
     })
  },
  /*
  *  分享转发
  *
  *
   */
  shareZhuanfa:function(){
      wx.showShareMenu({
          withShareTicket:true
      })
  }
})
