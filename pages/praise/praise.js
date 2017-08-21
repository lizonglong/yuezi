// pages/praise/praise.js
Page({

  data:{
    praiseList:1,
    praiseIndex:0,
    praiseCur:0,
    banner: {
      imgUrls: [
        '/images/w-首页_02_02.jpg',
        '/images/w-首页_02.jpg',
        '/images/w-首页_02_01.png'
      ],
      indicatorDots: true,
      indicatorActiveColor: '#007aff',
      autoplay: true,
      interval: 2000,
      duration: 1000,
      circular: true
    },
    praise: [
      [
        {
          imgUrl: '/images/w-分店介绍-云山店_31.jpg',
          videoTitle: "有护理学院的月子会所，就是不一样"
        },
        {
          imgUrl: '/images/w-分店介绍-云山店_31.jpg',
          videoTitle: "这样的服务团队，您觉得靠谱吗"
        },
        {
          imgUrl: '/images/w-分店介绍-云山店_31.jpg',
          videoTitle: "仕馨好不好，听听馨妈们怎么说"
        },
        {
          imgUrl: '/images/w-分店介绍-云山店_32.jpg',
          videoTitle: "仕馨亲人回娘家，感动的稀里哗啦"
        },
        {
          imgUrl: '/images/w-分店介绍-云山店_33.jpg',
          videoTitle: "在仕馨，我们这样给宝宝沐浴"
        },
        {
          imgUrl: '/images/w-分店介绍-云山店_34.jpg',
          videoTitle: "用虔诚的信仰做普惠型月子会所"
        },
        {
          imgUrl: '/images/w-分店介绍-云山店_31.jpg',
          videoTitle: "仕馨为什么广受好评，看完才知道"
        },
        {
          imgUrl: '/images/w-分店介绍-云山店_35.png',
          videoTitle: "坐月子还是仕馨靠谱"
        }
      ],
      [
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_62.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_64.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        },
        {
          imgUrl: "/images/w-首页_66.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
        }
      ],
      [
        {
          imgUrl: "/images/w-首页1_59.png",
          content: '分享今天受邀到仕馨高端月子会所为满月的轩Baby布置满月甜品桌，也谢谢宝宝爸爸妈妈信任选择，世界......'
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
      ],
      [
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
    ]
  },
  // 类型选择点击事件
  praiseCheck: function(ev){
    var index = parseInt(ev.currentTarget.dataset.index);
    if(index === 0){

    }else{

    }
    this.setData({
      praiseList: index,
    });
  },
  // 列表页脚点击
  numClick:function(ev){
    var index = parseInt(ev.currentTarget.dataset.index);
    var cur;
    // 按1或者...按钮的时候
    if(index === 0){
      if (this.data.praiseIndex === 0){
        cur = 0;
      }else{
        cur = this.data.praiseIndex;
        for(var i=0;i<6;i++){
          this.data.praiseIndex -=1;
          if (this.data.praiseIndex ===0){
            break;
          }
        }
        cur = this.data.praiseCur + cur - this.data.praiseIndex;
        cur = cur>4?4:cur;
      }
    }else if(index === 5){
      if ((this.data.praiseIndex + 6) * 12 < this.data.praise[this.data.praiseList].length){
        cur = this.data.praiseIndex;
        for(var i=0;i<6;i++){
          this.data.praiseIndex+=1;
          if ((this.data.praiseIndex + 6) * 12 > this.data.praise[this.data.praiseList].length){
            break;
          }
        }
        cur = this.data.praiseCur + cur - this.data.praiseIndex;
        cur = cur < 1 ? 1 : cur;
      }else{
        cur = 5;
      }
    }else{
      cur = index;
    }
    // 按其他数字按钮的时候

    this.setData({
      praiseIndex: this.data.praiseIndex,
      praiseCur: cur
    })
  },
  // 下一个页脚列表
  nextList: function(){
    var cur;
    var index = 0;
    // 检测页脚数字的长度
    for(var i=0; i<6;i++){
      if ((this.data.praiseIndex + i)*12 > this.data.praise[this.data.praiseList].length){
        break;
      }
      index =i;
    }
    // 判断是否有省略号
    if((this.data.praiseIndex+6)*12 < this.data.praise[this.data.praiseList].length){
      cur = this.data.praiseCur + 1;
      if(cur>4){
        this.data.praiseIndex+=1;
        cur = 4;
      }
    }else{
      cur = this.data.praiseCur + 1;
      cur = cur > 5 ? 5 : cur;
      if(cur > index){
        cur = index;
      }

    }
    this.setData({
      praiseIndex: this.data.praiseIndex,
      praiseCur:cur
    })
  },
  // 前一个页脚列表
  preList: function(){
    var cur;
    if (this.data.praiseIndex>0){
      cur = this.data.praiseCur-1;
      if(cur<1){
        cur=1;
        this.data.praiseIndex-=1;
      }
    }else{
      cur = this.data.praiseCur - 1;
      cur=cur<0?0:cur
    }
    this.setData({
      praiseCur: cur,
      praiseIndex:this.data.praiseIndex
    });
  },

  headList: function(){
    var cur = this.data.praiseCur;
    // 检测是否有···
    if (6 * 12 < this.data.praise[this.data.praiseList].length){
      cur = this.data.praiseIndex + this.data.praiseCur;
      cur = cur>4?4:cur;
    }
    this.setData({
      praiseIndex : 0,
      praiseCur: cur
    })
  },
  endList: function(){
    // 或列表在页脚的哪一行
    var cur = this.data.praiseIndex + this.data.praiseCur;
    // 获取列表的总页数
    var index =  Math.floor(this.data.praise[this.data.praiseList].length/12);
    // 保存现在的praiseIndex
    if(index>6){
      this.data.praiseIndex = index-5;
    }
    // 计算现在的蓝按钮位置
    if (this.data.praiseIndex>cur){
      cur = 1;
    }else{
      cur = cur - this.data.praiseIndex;
    }
    this.setData({
      praiseIndex: this.data.praiseIndex,
      praiseCur: cur
    })
  }
})