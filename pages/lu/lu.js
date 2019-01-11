// pages/moreDetails/moreDetails.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // goodstypeid, page, count
    img:"",
    moreData:[],
    goods_type_id: -1,
    page: 1,
    count: 8,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let goods_type_id = options.goodstypeid;
    let img = options.imgsrc;
    // console.log(goodstypeid)
    // console.log(img)
    this.setData({
      img,
      "goods_type_id": goods_type_id,
    
      
    });
    this.getDataDetail(goods_type_id, 1, 8);
  },
  getDataDetail: function (goods_type_id, page, count){
    wx.request({
      url: 'https://web.3fgj.com/Goods/getgoodstype',
      data:{
        goods_type_id, page, count
      },
      dataType:"json",
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res =>{
         console.log(res)
         if(res && res.statusCode == 200){
           console.log("1111")
           if(res.data.code == 1000){
            //  utils.Toast('获取数据成功！')
             const moreData = res.data.data;
             this.setData({
               moreData,
             })

           }

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
     console.log("111")
    let { goods_type_id, page, count} = this.data;
    page ++;
    this.getData(goods_type_id, page, count);
    this.setData({
      page,
     
    })
  },
  getData: function (goods_type_id, page, count){
       wx.request({
         url: 'https://web.3fgj.com/Goods/getgoodstype',
         data:{
           goods_type_id, page, count
         },
         method:"POST",
         dataType:"json",
         header:{
           'content-type': 'application/x-www-form-urlencoded'
         },
         success:res =>{
           console.log(res)
           if (res && res.statusCode == 200) {
             console.log("1111")
             if (res.data.code == 1000) {
              //  const moreData = res.data.data;
                 let { moreData} = this.data;
                 moreData.push(...res.data.data)
               this.setData({
                 moreData,
               })

             }

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