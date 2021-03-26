// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {id:1,text:"今天学习",finished:true},
      {id:2,text:"今天学习",finished:false},
      {id:3,text:"今天学习",finished:false},
      {id:4,text:"今天学习",finished:false},
    ],
    visible:false
  },
  confirm(event){
  },
  confirmCreate(event){
    let content = event.detail
    if(content){
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.hideConfirm()
    }
  },
  destoryTodo(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({ lists: this.data.lists })
  },
  hideConfirm(){
   this.setData({visible:false})
  },
  showConfirm(){
    this.setData({visible:true})
   }
})