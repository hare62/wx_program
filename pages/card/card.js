// pages/card/card.js
const utils = require('../../utils/util.js')
Page({
   
  /**
   * 页面的初始数据
   */
  data: {
    // data: null,
    goodsid:1,
    moreData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.request({
       url: 'https://web.3fgj.com/Goods/getgoodsbyid1',
       data:{
         "goods_id": 88
       },
       header: {
         'content-type': 'application/x-www-form-urlencoded'
       },
       method: 'POST',
       success: res => {
         console.log(res.data)
         if (res && res.data.code == 1000) {
           utils.Toast('获取数据成功！')
           const moreData = res.data.data;
           console.log(moreData);
           this.setData({
             moreData,
           })

           
         }
       }
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