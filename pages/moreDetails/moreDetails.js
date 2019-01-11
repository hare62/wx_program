// pages/moreDetails/moreDetails.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_type_id:-1,
    page:1,
    count:8,
    imgUrls: [
      'https://hd.3fgj.com/attachment/images/1/2018/06/JEUmZK4zUvUSSg4DSVhcGvlSVmZjlM.png'
    ],
   
    img:"",
    moreData:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let img = options.imgsrc;
    let goods_type_id = options.goodstypeid;
    this.setData({
      "img": img,
      "goods_type_id": goods_type_id,
     
    })
    let { page, count } = this.data;
    this.getMoreDetailData(goods_type_id,1,8);
  },
  getMoreDetailData: function (goodstypeid, page, count){
    wx.request({
      url: 'https://web.3fgj.com/Goods/getgoodstype',
      data: {
        "goods_type_id": goodstypeid,
        "page":page,
        "count": count,

      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      dataType:'json',
      success: res => {
          console.log(res.data)
        if (res && res.data.code == 1000) {
          utils.Toast('获取数据成功！')
          let { data } = res.data
          // const moredata = res.data.data;
          // data.push(...res.data.data)
          const moreData = res.data.data;
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
       console.log(11111)
    let { page, goods_type_id,count} = this.data;
       page ++;
    this.getMoreData(goods_type_id, page, count);
       this.setData({
         page,
         count,
         goods_type_id

         
       })

  },
  getMoreData: function (goods_type_id, page, count){
    wx.request({
      url: 'https://web.3fgj.com/Goods/getgoodstype',
      data: {
        "goods_type_id": goods_type_id,
        "page": page,
        "count": count,

      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      dataType: 'json',
      success: res => {
        console.log(res.data)
        if (res && res.data.code == 1000) {
          let { moreData } = this.data;
          // array1.concat(array2)
          moreData.push(...res.data.data)
          // const moredata = res.data.data;
          // const moreData = res.data.data;
          this.setData({
            moreData, 
           
          })
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})