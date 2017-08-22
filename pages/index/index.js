
Page({
  data: {
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
    nav: [
      {
        url: '/images/w-homepage_05.png',
        text: '首页',
        pageUrl:"/pages/index/index"
      },
      {
        url: '/images/w-homepage_07.png',
        text: "关于仕馨",
        pageUrl: "/pages/about/about"
      }, 
      {
        url:'/images/w-homepage_09.png',
        text: '专业服务体系',
        pageUrl: "/pages/service/service"
      },
      {
        url: '/images/w-homepage_11.png',
        text: '分店介绍',
        
      },
      {
        url: '/images/w-homepage_17.png',
        text: "套餐服务",
        pageUrl: "/pages/package/package"
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
    videoUrl: 'http://ugcdl.video.gtimg.com/flv/162/228/e01560xy74g.m701.mp4?vkey=61524392932B184B242FDDA0BF2F717FA444F74D626D8AC4736DAF84A489BA78AA317F2D744B6F3B6DBA486B35E51CA2FF356D874C977E6833FF1575887390E2DB6EFF871B4A4235429076C47B6540C0E654AFA467C856E1CDEEE3DAD55DFF544723CEB424C26559243A8F750CE1F4F4CB52D217CADF0C91&br=29&platform=2&fmt=auto&level=0&sdtfrom=v5010&guid=06b741038042432903df98ac5a573465',
    branch:{
      imgUrls:[
        '/images/w-homepage_01.jpg',
        '/images/w-homepage_01_02.jpg',
        '/images/w-homepage_01_03.jpg',
        '/images/w-homepage_01_04.jpg',
        '/images/w-homepage_01_02.jpg',
        '/images/w-homepage_01_03.jpg',
        '/images/w-homepage_01_04.jpg'
      ],
      indicatorDots: false,
      autoplay: false,
      duration: 500,
      circular: true
    },
    service:[
      [
        {
          imgUrl: "/images/w-homepage_36.jpg",
          text: "新生儿健康护理",
          textEn: "POSTPARTUM MOTHER RECOVERS"
        },
        {
          imgUrl: "/images/w-homepage_38.jpg",
          text: "中医调理保健",
          textEn: "CHINESE MEDICINE"
        }
      ],
      [
        {
          imgUrl: "/images/w-homepage_40.jpg",
          text: "产后妈妈康复",
          textEn: "PPOSTPARTUM MOTHER RECOVERS"
        }
      ],
      [
        {
          imgUrl: "/images/w-homepage_43.jpg",
          text: "母婴专业营养",
          textEn: "PROFESSIONAL NUTRITION"
        },
        {
          imgUrl: "/images/w-homepage_45.jpg",
          text: "产后妈妈塑性美丽",
          textEn: "MATHOR PRASTIC"
        }
      ],
      [
        {
          imgUrl: "/images/w-homepage_49.jpg",
          text: "新生儿早期智力开发",
          textEn: "EARLY EDUCATION"
        },
        {
          imgUrl: "/images/w-homepage_51.jpg",
          text: "立体式院感防御",
          textEn: "DEFENSE SYSTEM"
        }
      ],
      [
        {
          imgUrl: "/images/w-homepage_55.jpg",
          text: "全天候安保无缝体系",
          textEn: "SECURITY STYSTEM"
        }
      ]
    ],
    praise: [
      {
        select: true,
        list: [
          {
            imgUrl: "/images/w-homepage_59.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage_62.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage_64.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage_66.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          }
        ]
      },
      {
        select: false,
        list:[
          {
            imgUrl: "/images/w-homepage1_59.png",
            content:'分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage1_62.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage1_64.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage1_66.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          }
        ]
      },
      {
        select: false,
        list: [
          {
            imgUrl: "/images/w-homepage2_59.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage2_62.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage2_64.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-homepage2_66.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          }
        ]
      }
    ],
    tabSelect:0
  },
  navClick:function(ev){
    var index = ev.currentTarget.dataset.index;// 模板不支持target
    if(index == 0 || index>=2){
      return;
    }
    wx.navigateTo({
      url: this.data.nav[index].pageUrl
    })
  },
  praiseClick: function(ev){
    var index = ev.target.dataset.index;
    this.data.praise.forEach((item)=>{
      item.select = false;
    })
    this.data.praise[index].select = true;
    this.setData({
      tabSelect: index,
      praise: this.data.praise
    });
  },
  barClick: function(ev){
    console.log(ev)
    var index = ev.currentTarget.dataset.index;
    if(index == 0){

    }else if(index == 1){

    }else{
      this.data.barShow = !this.data.barShow;
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-in-out'
      });
      animation.bottom(this.data.barShow?"134rpx":"-500rpx").step();
      this.setData({
        barUp: animation.export()
      })
    }
  }
})

