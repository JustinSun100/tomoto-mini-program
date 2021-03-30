// pages/home/home.js
const {http} = require('../../lib/http.js');
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
  onShow(){
    http.get('/todos?completed=false').then(response=>{
      this.setData({ lists: response.data.resources })
    })
  },
  confirmCreate(event){
    let content = event.detail
    console.log(content)
    if (content) {
      http.post('/todos',{
          completed: false, description: content
      })
      .then(response => {
        let todo = [response.data.resource]
        this.data.lists = todo.concat(this.data.lists)
        this.setData({ lists: this.data.lists })
        this.hideCreateConfirm()
      })
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