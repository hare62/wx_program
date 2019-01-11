// pages/goods/goods.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputmsg:"附近店铺",
    res_bottom: null,
    res_show_top: null,
    res_today: null,
    page: 1,
    count: 2,
    bottom_limit: 4,
    todrec:'今日推荐',
    specillist:'精选系列',
    indicatorDots: true,
    indicatorColor: 'rgba(0, 0, 0, 0.3)',
    autoplay: false,
    interval: 5000,
    duration: 1000,
    scrollwithanimation:true,
    msgVal:[],
    hidden: true,
    rehidden:false,
    state: "block",
    searchInput:'',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
      this.getHomeData();
     
  },
  getHomeData: function () {
    // let page = this.data.page
    // let count = this.data.count
    // let bottom_limit = this.data.bottom_limit
    let { page, count, bottom_limit } = this.data;
    wx.request({
      url: 'https://web.3fgj.com/Index/newindex',
      data: {
        page,
        count,
        bottom_limit
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
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
  // onTouch: function (event){
  //    console.log(event)
  //    console.log(event.currentTarget.id)
  //    wx.navigateTo({
  //      url: "../details/details?" +event.currentTarget.id,
  //    })
  // },
  

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
  tiaozhuan:function(e){
    // console.log(e)
    let goodsid = parseInt(e.currentTarget.dataset.goodsid);
    // debugger
    // console.log(typeof goodsid)
    // debugger
    if (goodsid !='1' && goodsid != '2' ){
      console.log( goodsid)
      wx.navigateTo({
        url: '../details/details?goodsid=' + goodsid
      })
      // console.log(2222)
    }else{
      return
    }
  },
  learnMore:function(e){
    console.log(e)
    let goodstypeid = parseInt(e.currentTarget.dataset.goodstypeid);
    let imgsrc= e.currentTarget.dataset.imgsrc;
    console.log(imgsrc)
    console.log( goodstypeid);
    // console.log(item.pic)
    wx.navigateTo({
      // url: '../moreDetails/moreDetails?goodstypeid=' + goodstypeid + "&imgsrc=" + imgsrc,
      url: '../lu/lu?goodstypeid=' + goodstypeid + "&imgsrc=" + imgsrc,
    });
  },
  searchs:function(e){
    console.log(e)
   
    this.setData({
      rehidden: true,
      hidden: false,
      state:"none"
    });

  },
  toSearch:function(){
   
    console.log("wo 在 搜索")
  },
  // 监听输入框内容
  listenerSearchInput: function (e) {
    var searchInput = e.detail.value;
    this.setData({
      searchInput: searchInput
    })
  },

})