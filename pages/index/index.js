
Page({
  data: {
    banner: {
      imgUrls: [
        '/images/w-首页_02.jpg',
        '/images/w-首页_02_02.jpg',
      ],
      indicatorDots: false,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      circular: true
    },
    nav:{
      navImg: [
        {
          url: '/images/w-首页_05.png',
          text: '首页'
        },
        {
          url: '/images/w-首页_07.png',
          text: "关于仕馨"
        }, 
        {
          url:'/images/w-首页_09.png',
          text: '专业服务体系'
        },
        {
          url: '/images/w-首页_11.png',
          text: '分店介绍'
        },
        {
          url: '/images/w-首页_17.png',
          text: "套餐服务"
        },
        {
          url: '/images/w-首页_18.png',
          text: "妈妈见证"
        },
        {
          url: '/images/w-首页_19.png',
          text: "月子资讯"
        },
        {
          url: '/images/w-首页_20.png',
          text: "月子资讯"
        }
      ]
    },
    videoUrl: 'http://123.151.152.149/vhot2.qqvideo.tc.qq.com/AgpuPB9PVMRS2LFkJkg_xW5r94q3jkm5Y7Y_lDubI6v4/e01560xy74g.m701.mp4?sha=8FCA8E2D8CDEB7713ECA959A7B1A6B78C1FC4AE1&vkey=8EC9B2F70DC99388CF79ABDAB49598B6CA03E86DD44E28E84B94B623F56CDDE6C146D2C6EB5973E46DA6B31BE65274507AAEF54872E9B07E4F3F35CC58FF558797528AFE1EA982B9CE7A961FE2B097DB4607C90559839160E9BB4EF7AC65D03A5F0858A16D796376315F9847934DD27BFEA58C74B40D17A2&br=29&platform=2&fmt=auto&level=0&sdtfrom=v5010&guid=06b741038042432903df98ac5a573465&ocid=225188012&ocid=764220844&ocid=481127268',
    branch:{
      imgUrls:[
        '/images/w-首页_01.jpg',
        '/images/w-首页_01_02.jpg',
        '/images/w-首页_01_03.jpg',
        '/images/w-首页_01_04.jpg',
        '/images/w-首页_01_02.jpg',
        '/images/w-首页_01_03.jpg',
        '/images/w-首页_01_04.jpg'
      ],
      indicatorDots: false,
      autoplay: false,
      duration: 500,
      circular: true
    },
    service:[
      [
        {
          imgUrl: "/images/w-首页_36.jpg",
          text: "新生儿健康护理",
          textEn: "POSTPARTUM MOTHER RECOVERS"
        },
        {
          imgUrl: "/images/w-首页_38.jpg",
          text: "中医调理保健",
          textEn: "CHINESE MEDICINE"
        }
      ],
      [
        {
          imgUrl: "/images/w-首页_40.jpg",
          text: "产后妈妈康复",
          textEn: "PPOSTPARTUM MOTHER RECOVERS"
        }
      ],
      [
        {
          imgUrl: "/images/w-首页_43.jpg",
          text: "母婴专业营养",
          textEn: "PROFESSIONAL NUTRITION"
        },
        {
          imgUrl: "/images/w-首页_45.jpg",
          text: "产后妈妈塑性美丽",
          textEn: "MATHOR PRASTIC"
        }
      ],
      [
        {
          imgUrl: "/images/w-首页_49.jpg",
          text: "新生儿早期智力开发",
          textEn: "EARLY EDUCATION"
        },
        {
          imgUrl: "/images/w-首页_51.jpg",
          text: "立体式院感防御",
          textEn: "DEFENSE SYSTEM"
        }
      ],
      [
        {
          imgUrl: "/images/w-首页_55.jpg",
          text: "全天候安保无缝体系",
          textEn: "SECURITY STYSTEM"
        }
      ]
    ],
    praise: [
      {
        select: false,
        list:[
          {
            imgUrl: "/images/w-首页1_59.png",
            content:'分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-首页1_62.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-首页1_64.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-首页1_66.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          }
        ]
      },
      {
        select: true,
        list: [
          {
            imgUrl: "/images/w-首页2_59.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-首页2_62.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-首页2_64.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          },
          {
            imgUrl: "/images/w-首页2_66.png",
            content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
          }
        ]
      }
    ]
  },
})

