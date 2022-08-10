# canvas-design-ui
一个基于canvas和react的ui组件

NPM package: https://www.npmjs.com/package/canvas-design-ui

Git repo: https://github.com/talktao/canvas-design-ui

f it is helpful to you, please help me to order one 🌟, Thanks !

# Installation
With NPM
> npm i canvas-design-ui

With YARN
> yarn add canvas-design-ui

# Usage
> Read the Source luke!

## water-sphere

![图片](https://shenshipin-1253925857.cos.ap-guangzhou.myqcloud.com/2022/08/10/WmbKpteXJ1ZqCB3cPwwKsSX5YgcxRZYISoDZKWh38SHB5pFGi0TYVQbAU4c4FoPw_MdC8FTzJWechatIMG382.jpeg?imageMogr2/format/webp/thumbnail/!100p)

```js
// 导入
import { WaterSphere } from "canvas-design-ui";

<WaterSphereDiagram 
    height={180} 
    percent={78.888} 
    style={{ '--bg-color': '#f7f7f7', '--font-color': '#002EFF' }}
>
    <div>78.888%</div>
    <div style={{ fontSize: '14px' }}>占比</div>
</WaterSphereDiagram>

```
### 属性
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- |--- | --- |
| height | 水球图canvas高度 | number | 160 |
| percent | 占比 | number | - |
| gradientColorData | 渐变色数组 | Array | [[0, '#ffffff'], [0.5, '#00EDFF'], [1, '#002EFF']]|
| children | reactNode | React.ReactNode | - |

### CSS变量
| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- |--- | --- |
| --bg-color | 水球图背景色 | #f7f7f7 | - |
| --font-color | 字体默认色 | #002EFF | - |
