var util = require('../../utils/util');
Page({
  data:{
    pageIndex:4,
    page01:[
      "/images/package_03.jpg",
      "/images/package_04.jpg",
      "/images/package_05.jpg",
      "/images/package_06.jpg"
    ],
    page02: [
      {
        imgUrl: "/images/package_09.jpg",
        text: "妈妈日常专业护理"
      },
      {
        imgUrl: "/images/package_10.jpg",
        text: "通乳服务"
      },
      {
        imgUrl: "/images/package_12.jpg",
        text: "专家查房"
      },
      {
        imgUrl: "/images/package_13.jpg",
        text: "身体功能性修复"
      },
      {
        imgUrl: "/images/package_16.jpg",
        text: "中医营养调理"
      },
      {
        imgUrl: "/images/package_17.jpg",
        text: "生活护理"
      },
      {
        imgUrl: "/images/package_19.jpg",
        text: "中医保健调理"
      },
      {
        imgUrl: "/images/package_20.jpg",
        text: "美容项目"
      },
      {
        imgUrl: "/images/package_22.jpg",
        text: "产后修复"
      },
      {
        imgUrl: "/images/package_23.jpg",
        text: "形体恢复"
      }
    ],
    page03:[
        {
          imgUrl: "/images/package_32.jpg",
          text: "宝宝日常专业护理"
        },
        {
          imgUrl: "/images/package_33.jpg",
          text: "生活护理"
        },
        {
          imgUrl: "/images/package_35.jpg",
          text: "专家查房"
        },
        {
          imgUrl: "/images/package_36.jpg",
          text: "新生儿早教"
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
  navClick : util.navClick


})