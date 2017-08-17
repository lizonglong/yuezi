Page({
 
  data: {
    off:false
  },
  navTag:function() {
    var flag = !this.data.off;
    console.log(flag)
    this.data.off=flag;
  
  },


  onLoad: function (options) {
    
  },

 
})