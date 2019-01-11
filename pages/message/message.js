// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    messageData: [],
  },
  changeInputVal(e){
      console.log(e)
      this.setData({
        inputValue:e.detail.value,
      })
  },
  addmsg() {
    // console.log(this.data.inputValue)
    var lis = this.data.messageData;
    lis.push({
      msg:this.data.inputValue,
    });
    this.setData({
      messageData:lis,
      inputValue: "",
    });
  },
  delmeg(e){
    console.log(e)
     console.log(e.target.dataset.index)
    //  删的哪项索引
    var n = e.target.dataset.index;
    var list = this.data.messageData; 
    list.splice(n,1);
    this.setData({
      messageData: list,
    })
  },
})