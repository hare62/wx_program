const utils = require('../../utils/util.js');
var com = require("../../utils/common");
Page({

  data: {
    res_bottom:null,
    res_show_top:null,
    res_today:null,
    page:1,
    count:2,
    bottom_limit:4,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000, 
    message:"你跳转过来了",
  },
  fnUserStates(){
     this.setData({
       message: com.echoHello('GGG'),
       
     })
  },
  fnUserStates2() {
    this.setData({
      message: com.echoBye("Hare"),
    })
  },
  // onReady:function(){
  //    console.log(this.com)
  // },
  onLoad: function () {
    this.getHomeData()
  },
  getHomeData:function() {
    // let page = this.data.page
    // let count = this.data.count
    // let bottom_limit = this.data.bottom_limit
    let { page,count,bottom_limit } = this.data
    wx.request({
      url: 'https://web.3fgj.com/Index/newindex',
      data: {
        page,
        count,
        bottom_limit
      },
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      method:'POST',
      success: res => {
        console.log(res)
        if(res && res.data.code == 1000) {
          utils.Toast('获取数据成功！')
          let { res_bottom, res_show_top, res_today} = res.data
          this.setData({
            res_bottom,
            res_show_top,
            res_today
          })
        }
      }
    })
  }

})
