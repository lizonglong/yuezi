// /pages/branch/branch_introduce.js
Page({
  data: {
    banner: {
      imgUrls: [
        '/images/w-分店_01_1.jpg',
        '/images/w-分店_01_2.jpg',
        '/images/w-分店_01_1.jpg',
        '/images/w-分店_01_1.jpg',
      ],
      indicatorDots: true,
      indicatorActiveColor: '#007aff',
      autoplay: true,
      interval: 2000,
      duration: 1000,
      circular: true
    },
    content:{
      outdoor: [
        "青山绿意，空气怡人，背依白云山，毗邻白云苗圃，打造星级度假村式的月子会所，让产后妈妈和宝宝享受超优质的空气和环境，心旷神怡地度过每一天。",
        "白云店总面积超过20000平方米，专业设计独立景观花园，坐拥绿意视野，得天独厚的优美环境和新鲜空气，是产后静养的绝佳胜地。"
      ]
    },
    bannerDrap: {
      imgMsg: [
        {
          text:"母婴房室内设计简约而温馨，各种家居设施和生活用品配备齐全，妈妈和宝宝可以轻松入住，享受如家一般的舒适温暖。",
          url:"/images/w-分店介绍-云山店_07.jpg"
        },
        {
          text: "母婴房室内设计简约而温馨，各种家居设施和生活用品配备齐全，妈妈和宝宝可以轻松入住，享受如家一般的舒适温暖。",
          url: "/images/w-分店介绍-云山店_11.jpg"
        },
        {
          text: "母婴房室内设计简约而温馨，各种家居设施和生活用品配备齐全，妈妈和宝宝可以轻松入住，享受如家一般的舒适温暖。",
          url: "/images/w-分店介绍-云山店_07.jpg"
        },
        {
          text: "母婴房室内设计简约而温馨，各种家居设施和生活用品配备齐全，妈妈和宝宝可以轻松入住，享受如家一般的舒适温暖。",
          url: "/images/w-分店介绍-云山店_07.jpg"
        }
      ],
      indicatorDots: false,
      duration: 1000,
      circular: true
    },
    bannerDrap01: {
      imgMsg: [
        {
          text: "母婴房室内设计简约而温馨，各种家居设施和生活用品配备齐全，妈妈和宝宝可以轻松入住，享受如家一般的舒适温暖。",
          url: "/images/w-分店介绍-云山店_07.jpg"
        },
        {
          text: "母婴房室内设计简约而温馨，各种家居设施和生活用品配备齐全，妈妈和宝宝可以轻松入住，享受如家一般的舒适温暖。",
          url: "/images/w-分店介绍-云山店_07_2.jpg"
        },
        {
          text: "母婴房室内设计简约而温馨，各种家居设施和生活用品配备齐全，妈妈和宝宝可以轻松入住，享受如家一般的舒适温暖。",
          url: "/images/w-分店介绍-云山店_07_3.jpg"
        },
        {
          text: "母婴房室内设计简约而温馨，各种家居设施和生活用品配备齐全，妈妈和宝宝可以轻松入住，享受如家一般的舒适温暖。",
          url: "/images/w-分店介绍-云山店_07_4.jpg"
        }
      ],
      indicatorDots: false,
      duration: 1000,
      circular: true
    },
    related: [
      //第一行
      [
        // 有两列
        [
          [
            {
              url: '/images/w-分店介绍-云山店_14.jpg',
            }
          ]
        ],
        [
          //每列有两行
          [
            //每行有两个
            {
              url: '/images/w-分店介绍-云山店_15.jpg',
              text:'中医理疗区'
            },
            {
              url: '/images/w-分店介绍-云山店_16.jpg',
              text:'产后修复区'
            }
          ],
          [
            {
              url: '/images/w-分店介绍-云山店_17.jpg',
              text: '中药沐浴室'
            },
            {
              url: '/images/w-分店介绍-云山店_18.jpg',
              text: '中药洗头室'
            }
          ]
        ]
      ],
      // 第二行
      [
        [
          [
            {
              url: '/images/w-分店介绍-云山店_19.jpg',
              text: '中药熏疗室'
            },
            {
              url: '/images/w-分店介绍-云山店_20.jpg',
              text: '美疗室'
            }
          ],
          [
            {
              url: '/images/w-分店介绍-云山店_21.jpg',
              text: '隔离室'
            },
            {
              url: '/images/w-分店介绍-云山店_22.jpg',
              text: '保健室'
            }
          ]
        ],
        [
          [
            {
              url: '/images/w-分店介绍-云山店_23.jpg',
              text: '育婴室'
            },
            {
              url: '/images/w-分店介绍-云山店_24.jpg',
              text: '沐浴游泳区'
            }
          ],
          [
            {
              url: '/images/w-分店介绍-云山店_25.jpg',
              text: '育婴托管区'
            },
            {
              url: '/images/w-分店介绍-云山店_26.jpg',
              text: '瑜伽室'
            }
          ]
        ]
      ],
      // 第三行
      [
        [
          [
            {
              url: '/images/w-分店介绍-云山店_27.jpg',
              text: '体质调理区'
            },
            {
              url: '/images/w-分店介绍-云山店_28.jpg',
              text: '专业孕婴童摄影棚'
            }
          ],
          [
            {
              url: '/images/w-分店介绍-云山店_29.jpg',
              text: '多功能party房'
            }
            
          ]
        ],
        [
          [
            {
              url: '/images/w-分店介绍-云山店_30.jpg',
              text: ''
            }
          ]
        ]
      ]
    ],
    location:{
      longitude:113.324520,
      latitude: 23.099994,
      scale: 15,
      markers: [{
        iconPath: "/images/marker.jpg",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 42,
        height: 42,
        callout:{
          content:'仕馨云山店',
          borderRadius: 6,
          fontSize: 22,
          color: '#22dd22',
          display: 'ALWAYS'
        }
      }],
    }
  }
})