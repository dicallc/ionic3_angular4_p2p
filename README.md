ionic3_angular4_p2p
=====================

> 最近一直听说百度钱包的年化超越了余额宝，默默的下了一个百度钱包，发现不是很大，只有10M，带着疑问，打开了app，居然发现很多都是H5做的，当然我不知道是不是使用了混合技术，有些页面直接打开了webview进行加载网页...


ok，本来想试试VUE的，后面还是用回了AG，因为我想做的部分页面有图标，PM又叫我研究甘特图。

so，开干

### 0.使用 ###



- cnpm install 下载依赖
- ionic serve 开启浏览器调试



自带ionic环境哦


### 1.预览 ###

页面我已经放在我node.js服务器上了，可以直接在手机预览效果

[链接](http://learnserver.duapp.com/html/bdp2p/index.html)


<img src="/gif/预览.png"/>

### 2.总结 ###

1.chart库使用了百度的echart库,如果不是很了解引用第三方js库呢

[点击打开](http://www.cnblogs.com/hedengyao/p/6495785.html)

2.关于垂直居中，平行居中，还是使用flex布局，靠谱点，当然你也可以用ionic的grid布局(有概率不起作用...)

3.绝对布局在ionic貌似有点不起作用....建议使用ionic的**ion-fab** 





