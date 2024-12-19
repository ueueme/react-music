# react-music

#### 介绍

该项目是一款PC端在线听歌的音乐网站，基于最新react版本的网易云音乐，使用 vite 搭建 React项目，结合 hooks 的使用，状态管理器使用的是zustand，后端接口基于网易云音乐 Node.js API service。
目前整个项目实现了用户登录、音乐播放、歌单列表及详情页、歌曲详情、排行榜等页面功能。
<!-- 
线上Demo: [点我](https://rm.trtst.com)

视频Demo: [哔哩哔哩](https://www.bilibili.com/video/BV1Mp4y1P7ns) -->

#### 软件架构
目前技术栈：vite + react18.x + react-router-dom + zustand + antd + axio + scss + swiper


#### 安装教程

下载代码后，`npm i `安装一下项目依赖

#### 使用说明



#### 项目亮点

1、基于media&flex实现响应式布局，使用hooks封装公共逻辑为通用组件；

2、结合antd实现骨架屏预加载动画效果，避免页面长时间白屏或者闪烁等情况

3、基于zustand库，实现全局的用户信息、播放列表信息及用户个性化配置的状态管理

4、实现用户的账号密码、邮箱及二维码扫描登录的方式

5、实现播放列表的滚动，让当前播放歌曲在列表中央，让用户快速定位

6、实现歌词随歌曲的滚动效果

7、项目UI的构思及设计

#### React && Vue

1. react没有多 Tab 页缓存功能实现类似keep-alive

2. react没有官方的transition动画组件，需要安装第三方插件

3. 相比react的createContext / useContext，vue的provide / inject 更方便，更简洁

4. react的useImperativeHandle的用法与vue的defineExpose用法大致一样，vue的写法会更方便简洁

#### Antd && element-plus的特点

1. antd图片没有懒加载、占位内容

2. antd的Skeleton骨架屏不能自定义，比较呆板

#### zustand && pinia的特点

1. 没有pinia的getter的状态计算，不过也还好（主要是想：根据多个state值，来拼凑一个全新的state）

2. zustand会很方便将state的值存在localStorage，并且会自动获取，不用自己手动存取，转换数据格式

#### 性能优化

1. useCallback的作用

usecallback不是用来解决组件中有过多内部函数导致的性能问题，而是用来避免子组件不必要的render;

useCallback配合着memo一起使用;

2. useContext的使用

调用组件上方最近的Provider的值；传递对象和函数时，可以使用 useCallback包装，并将对象创建包装到 useMemo 中