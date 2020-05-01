﻿// 配置
window.Config = {

  // 站点名
  SiteName: '网站状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur913412-dadd81ac58c8d079165c2959',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 31,

  // 导航栏菜单
  Navi: [
    {
      text: 'Blog',
      url: 'https://www.yfblog.ml/index'
    },
  ]
};
