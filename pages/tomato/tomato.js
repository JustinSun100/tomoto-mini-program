// pages/tomato/tomato.js
Page({
  timer:null,
  data: {
    time:"",
     defalutSecond:5,
    timerStatus:'stop',
    confirmVisible:false,
    againButtonVisible:false,
    finishVisible:false
  }, 
  onShow: function(){
  this.startTimer()
  },
  startTimer(){
    this.setData({timerStatus:'stop'})
    this.changeTime()
    this.timer=setInterval(()=>{
      this.data.defalutSecond=this.data.defalutSecond-1
        this.changeTime()
        if(this.data.defalutSecond===0){
          this.setData({finishVisible:true})
          this.setData({againButtonVisible:true})
          return this.stopTimer()
        } 
      },1000) 
  },
  stopTimer(){
    clearInterval(this.timer)
          this.timer=null
          this.setData({timerStatus:'start'})
  },
  changeTime(){
    let m = Math.floor(this.data.defalutSecond/60)
    let s = Math.floor(this.data.defalutSecond%60)
    if(s === 0){
      s = "00"
    }
    if((s+"").length === 1){
      s = "0" + s
    }
    if ((m + "").length === 1) {
      m = "0" + m
    }  
    this.setData({ time: `${m}:${s}` })
  },
  confirmAbandon(){
   wx:wx.navigateBack({
     to:-1
   })
  },
 showConfirm(){
    this.setData({confirmVisible:true})
    this.stopTimer()
 },
 hideConfirm(){
  this.setData({confirmVisible:false})
  this.startTimer()
 },
againTimer(){
  this.data.defalutSecond=3
  this.startTimer()
  this.setData({againButtonVisible:false})
},
confirmFinish(){
  xxx
},
cancelFinish(){
  this.setData({finishVisible:false})
},

  onHide: function () {

  },

})