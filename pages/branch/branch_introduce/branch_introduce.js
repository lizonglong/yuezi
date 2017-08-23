// /pages/branch/branch_introduce.js
var util = require('../../../utils/branch_intro');
var app = getApp();
Page({
  data:{},
  onLoad: function(){
    this.setData(util.data[app.globalData.branchIndex]);
  }
})