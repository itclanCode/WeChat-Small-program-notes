/**
*  计算器cal的js
*  @author:zhenchuanwang
*  @date:2017/4/21
* 
*/
Page({
  data:{
     //String1,页面上可以读取的一个数据区域,一个变量名和数值,给每个id一个值
     id1:"back",
     id2:"clear",
     id3:"negative",
     id4:"+",
     id5:"9",
     id6:"8",
     id7:"7",
     id8:"-",
     id9:"6",
     id10:"5",
     id11:"4",
     id12:"×",
     id13:"3",
     id14:"2",
     id15:"1",
     id16:"÷",
     id17:"0",
     id18:".",
     id19:"history",
     id20:"=",
     screenData:"0",
     lastIsOperator:false, // 最后一个是不是操作符,默认操作符不能连续出现
     arr:[],   // 数组
     logs:[]

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    //String2
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    //String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    //String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    //String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    //String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    //String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    //String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
   // 下面的this指的就是Page
   // 拿到原来的数据与新的数据进行拼接
  history:function(){  // 点击历史实现跳转，参考导航
      wx.navigateTo({
      url: '../list/list'
    })
  },
  clickButton:function(event){
      console.log(event.target.id);
    var id=event.target.id;
    if(id==this.data.id1){//退格
           var data = this.data.screenData;
           if(data==0){
               return;
           }
           data=data.substring(0,data.length-1); 
           if(data==""||data=="-"){
               data=0;
           }
           this.setData({screenData:data});
           this.data.arr.pop();
      }else if(id==this.data.id2){//清屏
         this.setData({screenData:"0"});
         this.data.arr.length=0;
      }else if(id==this.data.id3){//正负号
          var data = this.data.screenData;
          if(data==0){
              return;
          }
          var firstWord=data.substring(0,1);
          if(firstWord=="-"){
              data=data.substring(1,data.length);
              this.data.arr.shift();
          }else{
              data="-"+data;
              this.data.arr.unshift("-");
          }
         this.setData({screenData:data});
        
      }else if(id==this.data.id20){// =
         var data = this.data.screenData;
         if(data==0){
               return;
         }
         var lastWord = data.substring(data.length-1,data.length);
         if(isNaN(lastWord)){ // 判断最后一个是不是数字
             return;
         }
         var num="";
        
         var lastOperator;
         var arr = this.data.arr;
         var optarr=[];
         for(var i in arr){
             if(isNaN(arr[i])==false||arr[i]==this.data.id18||arr[i]==this.data.id3){      // 加减乘除做了一个操作，遇到点
                 num+=arr[i];
             }else{
               lastOperator= arr[i];
               optarr.push(num);
               optarr.push(arr[i]);
               num="";
             }
         }
         optarr.push(Number(num));
         var result=Number(optarr[0])*1.0;
          console.log(result)
         for(var i=1;i<optarr.length;i++){   // 判断操作符加减乘除
             if(isNaN(optarr[i])){
                if(optarr[1]==this.data.id4){ 
                    result+=Number(optarr[i+1]);
                }else if(optarr[1]==this.data.id8){
                    result-=Number(optarr[i+1]);
                }else if(optarr[1]==this.data.id12){
                    result*=Number(optarr[i+1]);
                }else if(optarr[1]==this.data.id16){
                    result/=Number(optarr[i+1]);
                }
             }
         }
         
         this.data.logs.push(data+"="+result);
         wx.setStorageSync('callogs', this.data.logs);
         this.data.arr.length=0;   // 值清空
         this.data.arr.push(result); // 把结果放到result
         this.setData({screenData:result+""}); // 把结果放到屏幕上

      }else{

       if(id==this.data.id4||id==this.data.id8||id==this.data.id12||id==this.data.id16){    //操作符不能连续出现
         if(this.data.lastIsOperator==true||this.data.screenData==0){
             return;
         }
        
        }

        var sd=this.data.screenData;
        var data;
        if(sd==0){  // 去除掉开始第一个为0
            data=id;
        }else{
            data=sd+id;
        }
        this.setData({screenData:data});
        this.data.arr.push(id);

        if(id==this.data.id4||id==this.data.id8||id==this.data.id12||id==this.data.id16){ //操作符不能连续出现
            this.setData({lastIsOperator:true});
        }else{
            this.setData({lastIsOperator:false});
        }
      }

  }

});