// pages/remessage/remessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputval:"",
    msgVal: []
  },
  inputmsg(e) {
    // console.log(e.detail.value)
    this.setData({
      inputval: e.detail.value
    })
    // 将 input的值改变掉
    //  console.log(this.data.inputval)
  },
  addMsg(){
    console.log("1111");
    var list = this.data.msgVal;
    list.push({
      msg: this.data.inputval,
    });
    this.setData({
      msgVal:list,
      inputval: "",
    })
  },
  delmeg(e){
    console.log(e.target.dataset.index)
    var n = e.target.dataset.index;
    var list = this.data.msgVal;
    list.splice(n,1);
    this.setData({
      msgVal: list
    })
  }
  

})