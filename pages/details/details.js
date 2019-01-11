// pages/details/details.js
const utils = require('../../utils/util.js')
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    ],
    data:null,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    show:true,
    arrshuzu:[],
    msg:[],
    price:0,
    onsale:0,
    unit:0,
    net_content:null,
    goods_name:null,
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeData(options.goodsid);
   
  },
  getHomeData: function (goodsid) {
   
    wx.request({
      url: 'https://web.3fgj.com/Goods/getgoodsbyid1',
      data: {
        "goods_id": goodsid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        console.log(res.data)
        if (res && res.data.code == 1000) {
          
          utils.Toast('获取数据成功！')
          console.log(res.data.data)
          let arrshuzu = res.data.data[1];
          res.data.data[1][0].flag = true;
          let { data } = res.data;
          let price = res.data.data[1][0].price;
          let net_content = res.data.data[1][0].net_content;
          let unit = res.data.data[1][0].unit;
          let goods_name = res.data.data[1][0].description;
          this.setData({
            data,
            arrshuzu,
            price,
            net_content,
            unit,
            goods_name

          })
        }
      }
    })
  },
  click:function(e){
    let indexed = e.currentTarget.dataset.index;
    let goodId =e.currentTarget.dataset.goodId;
    // console.log(item.id)
    // console.log(goodId)
    // console.log(e)
    let arrshuzu = this.data.arrshuzu;
    
    // arrshuzu.forEach(function(item,index){
     
    //   if (index == indexed){
    //     item.flag = true;
    //     console.log(item.id)
    //     console.log(goodId)
    //   }else{
    //     item.flag = false;
    //   }
    // });
    arrshuzu.forEach(function(item,index){
      if (item.id == goodId) {
        console.log(item.is_index_show)
           item.is_index_show=1;
      } else {
        // this.data.data[1][item].is_index_show = 0;
           item.is_index_show = 0;
      }
    });
    let price = arrshuzu[indexed].price
    let net_content = arrshuzu[indexed].net_content
    let unit = arrshuzu[indexed].unit
    let goods_name = arrshuzu[indexed].description
      this.setData({
        arrshuzu,
        price,
        net_content,
        unit,
        goods_name

        
      })



  },
   
  sale:function(){
    
    let juan = this.data.data[2][0];
    // wx.navigateTo({
    //   url: '../juan/juan?juan=' + JSON.stringify(juan)
    // })
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