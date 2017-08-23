var obj = {
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
      pageUrl: "/pages/service/service"
    },
    {
      url: '/images/w-homepage_11.png',
      text: '分店介绍',
      pageUrl: "/pages/branch/branch"
    },
    {
      url: '/images/w-homepage_17.png',
      text: "套餐服务",
      pageUrl: "/pages/package/package"
    },
    {
      url: '/images/w-homepage_18.png',
      text: "妈妈见证",
      pageUrl: "/pages/praise/praise"
    },
    {
      url: '/images/w-homepage_19.png',
      text: "月子资讯"
    },
    {
      url: '/images/w-homepage_20.png',
      text: "预约参观"
    }
  ],
  navClick: function (ev) {
    var index = ev.currentTarget.dataset.index;// 模板不支持target
    if (index == this.data.pageIndex || index >= 7) {
      return;
    }
    this.barClick();
    wx.navigateTo({
      url: this.data.nav[index].pageUrl
    })
  },
  barClick: function (ev) {
    var index = ev?ev.currentTarget.dataset.index:2;
    if (index == 0) {

    } else if (index == 1) {

    } else if (ev || this.data.barShow){
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
  }
}
module.exports=obj;