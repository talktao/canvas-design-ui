# canvas-design-ui
A UI component based on canvas and react

NPM package: https://www.npmjs.com/package/canvas-design-ui

Git repo: https://github.com/talktao/canvas-design-ui

If it is helpful to you, please help me to order one on GitHub 🌟, Thanks !

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
### Props
| Name | Description | Type | Default |
| --- | --- |--- | --- |
| height | water-sphere canvas height | number | 160 |
| percent | Percent of the water sphere | number | - |
| gradientColorData | Water ball gradient | Array | [[0, '#ffffff'], [0.5, '#00EDFF'], [1, '#002EFF']]|
| children | Customized information | React.ReactNode | - |

### CSS Variables
| Name | Description | Default | Global |
| --- | --- |--- | --- |
| --bg-color | Color of the canvasBg | #f7f7f7 | - |
| --font-color | Color of the font | #002EFF | - |
