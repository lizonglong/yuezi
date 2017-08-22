var app=getApp();
Page({
  data:{
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
    nav: [
      {
        url: '/images/w-homepage_05.png',
        text: '首页',
        pageUrl: "/pages/index/index"
      },
      {
        url: '/images/w-homepage_07.png',
        text: "关于仕馨",
        pageUrl: "/pages/about/about"
      },
      {
        url: '/images/w-homepage_09.png',
        text: '专业服务体系',
        pageUrl: "/pages/profession/profession"
      },
      {
        url: '/images/w-homepage_11.png',
        text: '分店介绍'
      },
      {
        url: '/images/w-homepage_17.png',
        text: "套餐服务"
      },
      {
        url: '/images/w-homepage_18.png',
        text: "妈妈见证"
      },
      {
        url: '/images/w-homepage_19.png',
        text: "月子资讯"
      },
      {
        url: '/images/w-homepage_20.png',
        text: "月子资讯"
      }
    ],
    
  },

  barClick: function (ev) {
    console.log(ev)
    var index = ev.currentTarget.dataset.index;
    if (index == 0) {

    } else if (index == 1) {

    } else {
      this.data.barShow = !this.data.barShow;
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-in-out'
      });
      animation.bottom(this.data.barShow ? "134rpx" : "-500rpx").step();
      this.setData({
        barUp: animation.export()
      })
    }
  },
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