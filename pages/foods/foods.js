// pages/foods/foods.js
const utils = require('../../utils/util.js')
const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
     
    ],
    indicatorDots: true,
    indicatorColor: 'rgba(0, 0, 0, 0.3)',
    autoplay: false,
    interval: 5000,
    duration: 1000,
    scrollwithanimation: true,
    // 这个是接口中的变量
    res_bottom: null,
    res_show_top: null,
    res_today: null,
    // 约定传参数用的
    page: 1,
    count: 2,
    bottom_limit: 4,
    // scroll-view  可滚动视图区域。
     toView: 'red',
    scrollTop: 100,
    scrollx:true,
    scrolly:false,
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  onLoad: function (options) {
    this.getHomeData(); 
  },
  getHomeData(){
    let { page, count, bottom_limit} = this.data;
    wx.request({
      url: "https://web.3fgj.com/Index/newindex",
      data: {
        page,count,bottom_limit
      },
      method: 'POST',
      success: res => {
        console.log(res)
        if (res && res.data.code == 1000) {
          utils.Toast('获取数据成功！')
          let { res_bottom, res_show_top, res_today } = res.data
          this.setData({
            res_bottom,
            res_show_top,
            res_today
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