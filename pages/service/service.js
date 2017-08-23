var app=getApp();
var util = require('../../utils/util');
Page({
  data:{
    pageIndex:2,
    content:[
      {
        imgPath:"/images/professionalSystem_03.jpg",
        text:"新生儿健康护理",
        id:0
      },
      {
        imgPath: "/images/professionalSystem_05.jpg",
        text: "中医调理保健",
        id: 1
      },
      {
        imgPath: "/images/professionalSystem_09.jpg",
        text: "产后妈妈康复",
        id:2
      },
      {
        imgPath: "/images/professionalSystem_10.jpg",
        text: "母婴专业营养",
        id:3
      },
      {
        imgPath: "/images/professionalSystem_13.jpg",
        text: "产后妈妈塑形美丽",
        id:4
      },
      {
        imgPath: "/images/professionalSystem_14.jpg",
        text: "新生儿早期智力开发",
        id:5
      },
      {
        imgPath: "/images/professionalSystem_17.jpg",
        text: "立体式院感防御",
        id:6
      },
      {
        imgPath: "/images/professionalSystem_18.png",
        text: "全天候无缝安保体系",
        id:7
      }
    ],
    banner: {
      imgUrls: [
        '/images/w-homepage_02.jpg',
        '/images/w-homepage_02_02.jpg',
      ],
      indicatorDots: false,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      circular: true
    },
    twocode: {
      twoCode: [
        {
          imgPath: "/image/index_102.jpg",
          text: "关注官方微信"
        },
        {
          imgPath: "/image/index_104.jpg",
          text: "关注官方微博"
        }
      ],
      bottomText: "Copyright©2011 仕馨月子会所 (粤ICP备17008523号-1)"
    },
    nav: util.nav
  },

  barClick: util.barClick,
  navClick: util.navClick,
  //点击事件

  //跳到service_tend
  openS_tend:function(ev){
    var index = ev.currentTarget.dataset.id;
    app.globalData.id=index;
    wx.navigateTo({
      url: 'service_tend/service_tend?id='+index
    })
  }
})