Page({
  data:{
    content:[
      {
        imgPath:"/images/专业服务体系_03.jpg",
        text:"新生儿健康护理"
      },
      {
        imgPath: "/images/专业服务体系_05.jpg",
        text: "中医调理保健"
      },
      {
        imgPath: "/images/专业服务体系_09.jpg",
        text: "产后妈妈康复"
      },
      {
        imgPath: "/images/专业服务体系_10.jpg",
        text: "母婴专业营养"
      },
      {
        imgPath: "/images/专业服务体系_13.jpg",
        text: "产后妈妈塑形美丽"
      },
      {
        imgPath: "/images/专业服务体系_14.jpg",
        text: "新生儿早期智力开发"
      },
      {
        imgPath: "/images/专业服务体系_17.jpg",
        text: "立体式院感防御"
      },
      {
        imgPath: "/images/专业服务体系_18.png",
        text: "全天候无缝安保体系"
      }
    ]
  },


  //点击事件

  //跳到service_tend
  openS_tend:function(){
    wx.navigateTo({
      url: 'service_tend/service_tend?id='
    })
  }
})