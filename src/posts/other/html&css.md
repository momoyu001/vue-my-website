# HTML5&CSS

**如何实现浏览器内多个标签页之间的通信？**

- localStorage

  - localStorage是浏览器多个标签公用的存储空间

  - 针对`非当前页面对localstorage进行修改`时才会触发

  - 原数据的值修改了才会触发

  - ```
    window.addEventListener('storage', function(e) {
    	console.log(e);
    })
    ```

- webWorker

  - 可以提供一个额外的线程来执行一些js代码，并且不会影响到浏览器用户界面。
  - 是浏览器宿主提供的多线程能力。
  - 普通webworker直接使用`new Worker()`创建，这种webworker是当前页面专有的。
  - 共享worker (sharedWorker) 是可以多个标签页，iframe共同使用的。
  - webworker无法在本地使用，在服务上使用，注册一个`onmessage`事件监听信息。客户端发送message就会触发

- webSocket

  - 每个页面都去监听服务器推送的事件，来获得其他页面发送的数据。

- broadcastChannel

  - 是浏览器提供的专门负责数据频道传输的API，它可以让同一个origin下不同标签页、iframe甚至是窗口下的页面之间进行数据的传输。

  - ```
    // 创建一个新的频道
    const channel = new BroadcastChannel('一个标识，用于指定频道');
    
    // 发送数据
    channel.postmessage(data);
    
    // 监听数据
    channel.onmessage = function (e) {};
    channel.onmessageerror = function (error) {};
    
    // 销毁频道
    channel.close();
    ```

  - ```
    typeof window.BroadcastChannel === 'function'
    判断当前浏览器是否支持BroadcastChannel
    ```

------

**前端页面由哪三层构成？**

- 结构层 -- html

- 表示层 -- css

- 行为层 -- js

------

**CSS盒模型**

每一个标签都可以看作一个盒子模型，这个盒子包括：`content-内容`，`padding-内边距`，`border-边框`，`margin-外边距`。



**盒模型有两种分类：**

- 标准盒模型：`box-sizing: content-box`
  - 即：我们所说的`width`和`height`，指的是content的宽度、高度。不包含其他三个。

- IE盒模型：`box-sizing: border-box`
  - 即：我们所说的`width`和`height`，指的是content + padding + border

------

**实现0.5px的线**

先画一个1px的线，再用transform缩小至0.5px。

```
<div class="line"></div>

.line {
	height: 1px;
	transform: scaleY(0.5)
}
```

------

**实现不使用border，画出1px的线，在不同浏览器的标准模式和怪异模式下都能保持一致**

```
<div style="height: 1px; overflow: hidden; background: red"></div>
```

------

**CSS中哪些属性可以从父类继承**

- 字体相关的样式属性: font-size font-family font-style font-weight

- color

- 字母间距属性: letter-spacing

- 可见性属性：visibility

- 文字展示属性：line-height text-align text-index text-transform

  - text-transform:

    - ```
      text-transform: capitalize	// 首字母大写
      text-transform: uppercase // 全部转为大写
      text-transform：lowercase // 全部转为小写
      text-transform: none // 阻止所有大小写转换
      ```

- 字体间距属性：word-spacing

------

**link和@import的区别：**

@import是CSS提供的，只能用于加载CSS。

link属于XHTML标签，除了加载CSS外，还能用于定义RSS，定义ref连接属性。

页面被加载时，link标签的内容会被同时加载，@impot的内容只能在页面加载完毕之后再加载。

------

**清除浮动的方法有哪些？什么时候需要清除浮动？**

为什么要清除浮动？

一个块元素，如果没有设置height，那么它的高度就是由子元素来撑开的。如果子元素使用了浮动，脱离了标准文档流，那么父元素的高度会将其忽略，不清除浮动，父元素就会出现高度不够，那样的话，设置border或者background都得不到正确的结果。

正是因为浮动的这种特性，导致本属于普通流中的元素浮动之后，包含框内部由于不存在其他普通流元素了，也就表现出高度为 0（`高度塌陷`）。在实际布局中，往往这并不是我们所希望的，所以需要闭合浮动元素，使其包含框表现出正常的高度。



清除浮动的方法？

- 父级 div定义自己的height

  - 定义了自己的 height，就解决了父级高度坍塌的问题

- 父级定义overflow:hidden属性

- 父级加上::after

  - ```
    .parent::after {
    	content: '';
    	display: block;
    	clear: both;
    }
    ```

  - 

- 子元素后面结尾处加上空的div设置属性clear: both



任何元素都可以浮动，浮动之后会形成一个块级框，脱离了文档流。

------

**CSS的定位机制**

CSS的三种定位机制：

- 普通流：display
- 浮动：float
- 绝对定位：position

------

**CSS3的动画效果**

- transition：过渡

  - 只能定义开始和结束状态，不能定义中间的状态，也就是说，只有两个状态

  - **过渡，需要特定的触发条件，如：hover。需要有特定的目标属性，如：height**

    - | 属性                       | 介绍                                                         |
      | -------------------------- | ------------------------------------------------------------ |
      | transition-property        | 元素的哪一个属性将用过渡来表现                               |
      | transition-duration        | 元素过渡过程持续的时间，默认是0s                             |
      | transition-timing-function | 元素过渡时的速率函数，`linear` `ease-in` `steps`或自定义的`subic-bezier`函数。默认值是`ease`，中间快，两头慢 |
      | transition-delay           | 元素过渡延迟的时间，默认是0s                                 |

    - ```
      .child {
      	width: 100px;
      	height: 20px;
      	transition: width,height 3s linear 0s;
      }
      
      .child:hover {
      	width: 200px;
      	height: 100px;
      }
      ```

  - 

- animation：动画

  - 动画可以自动开始，可以循环

  - 可以按照实际需求添加更多的`keyframes`来创建动画。

  - ```
    @keyframs myAnimation {
    	...
    }
    
    .parent {
    	animation: myAnimation ...
    }
    ```

  - 属性

    - animation-name: 需要绑定到选择器的keyframes的名称
    - animation-duration: 完成动画所花费的时间
    - animation-timing-function: 规定动画的速度曲线
    - animation-delay: 动画开始之前的延迟时间
    - animation-iteration-count： 动画应该播放的次数
    - animation-direction：是否应该轮流反向播放动画

------

**图片的使用**

如容器的背景、按钮、导航的背景等应该尽量使用`PNG`格式进行存储。其他一些元素，如：广告Banner，商品图片等对质量要求不是特别苛刻的，则尽可能使用`JPG`去进行存储从而降低文件大小。

------

**引入CSS的方式**

- 外部链接引入
- 内部样式表：访问量大的门户网站较为常见
  - 与引入外部链接相比：速度快，所有的CSS都是针对本页面的，直接在文档中读取样式。维护麻烦，样式不能复用。
- 行内样式
- @import引入：`@import ../styles/style.css `

------

**以CSS3标准定义一个webkit内核浏览器识别的圆角**

```
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
```

------

**CSS选择符的匹配顺序**

CSS选择符的匹配顺序，是`从右往左`的。从左往右的话，发现需要左很多的回溯，可能会损失更多的性能。

```
#nav li
```

以上，会先查找所有的`li`，然后匹配上父元素id为nav的元素。

编写CSS样式时要注意：

- dom深度不要太深

- 不要为id选择器指定类名，因为id就可以唯一确定一个元素了

- 避免后代选择符，尽量使用子选择符。子选择符的匹配概率要大于后代选择符。

------

**浏览器渲染流程**

- 解析html构建DOM树，解析CSS构建CSSOM树
- 将DOM树和CSSOM树结合生成render树
- 有了render树，浏览器已经知道了网页中有哪些节点，各个节点的CSS定义以及它们的从属关系，从而计算出每个节点在屏幕中位置。
- 按照计算出来的规则，通过显卡把内容画在屏幕上

------

**CSS实现文字超出长度时...的展示**

一行文字的场景：

```
.my-div {
    width: 100px;
    
    overflow: hidden; // 超出部分要隐藏
    white-space: nowrap; // 不能换行
    text-overflow: ellipsis; // 显示省略号
}
```



多行文字的场景：

```
width: 100%;
overflow: hidden;
white-space: wrap;
text-overflow: ellipsis;
word-break: break-all;

display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```



超过元素高宽省略：需要根据元素的高度算一下`-webkit-lin-clamp`的最大值

```
.over-line {
    height: 65px;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
 }
```



text-overflow: ellipsis生效的条件：

- 包裹文字的容器要有确定的宽度
- 包裹文字的容器需要同时设置：`overflow: hidden; white-space: nowarp`



------

**CSS3的新特性**

- 圆角 border-radius
- 阴影 box-shadow
- 对文字加特效 text-shadow
- 线性渐变 gradient
- 旋转、缩放、定位、倾斜
- 增加了CSS选择器

------

**CSS的flex布局**

任何 元素都可以设置为flex布局，设置之后，元素的float clear vertical-align属性将失效。

布局的传统解决方案：`display + position + float`

容器的属性：

- flex-drection
- flex-wrap
- flex-flow: flex-direction || flex-warp --> `row nowrap`
- justify-content
- align-items
- align-content

项目的属性：

- order：定义项目的排列顺序，数值越小越靠前。默认为0
- flex-grow：定义项目的放大比例，默认为0
- flex-shrink：定义项目缩小比例，默认为1
- flex-basis：定义在分配多余空间之前，项目占据的主轴空间，默认值auto，项目本身的大小
- flex：flex-grow flex-shrink flex-basis，默认值为 0 1 auto
- align-self：定义单个项目与其他项目不一样的对其方式，默认值auto

------

**CSS实现一个三角形，其原理是什么**

把另外三条边隐藏掉。

```
div {
	width: 0;
	height: 0;
	border: transparent solid 10px;
	border-bottom: #ff0000 solid 10px;
}
```

------

**BFC-块级格式上下文**

它是一个独立容器，决定了元素如何对其进行定位，以及与其他元素的关系和相互作用。BFC内部的元素和外部的元素不会互相影响。

PS：float，子元素float之后影响到了父元素，当父元素是BFC时，也就不会影响到样式



怎样触发BFC：

- 根元素
- float的值不为none
- overflow不为visible
- display的值为inline-block、table-cell、table-caption
- position的值为absolute或fixed

------

**margin的百分比单位**

- 普通元素：margin都是相对于它`容器的宽度`来计算的

- 绝对定位元素：相对于第一个具有`定位属性`的`祖先元素的宽度`计算的

------

**浏览器内核**

内核主要分成两个部分：

- 渲染引擎：
  - 负责取得网页的内容、整理讯息，以及计算网页的显示方式，然后会输出至显示器或者打印机。浏览器内核的不同，对于网页的语法解释会有不同，所以渲染的效果也有不同。所有网页浏览器、电子邮件客户端以及其他需要编辑、显示网络内容的应用程序都需要内核。

- JS引擎：
  - 解释和执行JavaScript来实现网页的动态效果

最开始渲染引擎和JS并没有很明确的区分，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

| 浏览器                                      | 内核    |
| ------------------------------------------- | ------- |
| IE浏览器                                    | Trident |
| FireFox浏览器                               | Gecko   |
| Safari浏览器、Google Chrome、Opera浏览器    | Webkit  |
| Chrome(28及后的版本)、Opera(15及往后的版本) | Blink   |