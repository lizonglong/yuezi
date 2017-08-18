// pages/branch/branch.js
Page({
  data:{
    banner: {
      imgUrls: [
        '/images/w-首页_02.jpg',
        '/images/w-首页_02_01.png',
        '/images/w-首页_02_02.jpg',
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
    nav: [
      {
        url: '/images/w-首页_05.png',
        text: '首页',
        pageUrl: "/pages/index/index"
      },
      {
        url: '/images/w-首页_07.png',
        text: "关于仕馨",
        pageUrl: "/pages/about/about"
      },
      {
        url: '/images/w-首页_09.png',
        text: '专业服务体系',
        pageUrl: "/pages/profession/profession"
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
    ],
  },
  navClick: function (ev) {
    var index = ev.currentTarget.dataset.index;// 模板不支持target
    if (index == 0 || index >= 2) {
      return;
    }
    wx.navigateTo({
      url: this.data.nav[index].pageUrl
    })
  },
  barClick: function (ev) {
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
  branchListClick: function(ev){
    var index = ev.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/branch_introduce?index=' + index,
    })
  }
})