// pages/branch/branch.js
var util = require('../../utils/util');
var app = getApp();
Page({
  data:{
    pageIndex:3,
    banner: {
      imgUrls: [
        '/images/w-homepage_02_02.jpg',
        '/images/w-homepage_02.jpg',
        '/images/w-首页_02_01.png',
      ],
      indicatorDots: true,
      indicatorActiveColor: '#007aff',
      autoplay: true,
      interval: 2000,
      duration: 1000,
      circular: true
    },
    branch:[
      {
        imgUrl:"/images/w-分店_03.jpg",
        text:"云山店-度假悠养型"
      },
      {
        imgUrl: "/images/w-分店_05.jpg",
        text: "西关店-精品优养型"
      },
      {
        imgUrl: "/images/w-分店_09.jpg",
        text: "越秀店-保健安养型"
      },
      {
        imgUrl: "/images/w-分店_10.jpg",
        text: "东莞店-清馨舒养型"
      },
      {
        imgUrl: "/images/w-分店_13.jpg",
        text: "普宁店-私享静养型"
      },
      {
        imgUrl: "/images/w-分店_14.jpg",
        text: "萝岗店-雅致安养型"
      }
    ],
    twocode: {
      backImg: "/image/image.index_bg.jpg",
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
    },
    nav: util.nav
  },
  navClick: util.navClick,
  barClick: util.barClick,
  branchListClick: function(ev){
    var index = ev.currentTarget.dataset.index;
    app.globalData.branchIndex = index;
    wx.navigateTo({
      url: '/pages/branch/branch_introduce/branch_introduce',
    })
  }
})