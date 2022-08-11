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

## 目录
  - [water-sphere](#water-sphere)
    - [Props](#props)
    - [CSS Variables](#css-variables)
  - [ProgressCircle](#progresscircle)
    - [Props](#props-1)
    - [CSS Variables](#css-variables-1)

## water-sphere

![图片](https://shenshipin-1253925857.cos.ap-guangzhou.myqcloud.com/2022/08/10/WmbKpteXJ1ZqCB3cPwwKsSX5YgcxRZYISoDZKWh38SHB5pFGi0TYVQbAU4c4FoPw_MdC8FTzJWechatIMG382.jpeg?imageMogr2/format/webp/thumbnail/!100p)

```js
import { WaterSphere } from "canvas-design-ui";

<WaterSphere
    height={180} 
    percent={78.888} 
    style={{ '--bg-color': '#f7f7f7', '--font-color': '#002EFF' }}
>
    <div>78.888%</div>
    <div style={{ fontSize: '14px' }}>占比</div>
</WaterSphere>

```
### Props
| Name              | Description                 | Type            | Default                                            |
| ----------------- | --------------------------- | --------------- | -------------------------------------------------- |
| height            | water-sphere canvas height  | number          | 160                                                |
| percent           | Percent of the water sphere | number          | -                                                  |
| gradientColorData | Water ball gradient         | Array           | [[0, '#ffffff'], [0.5, '#00EDFF'], [1, '#002EFF']] |
| children          | Customized information      | React.ReactNode | -                                                  |

### CSS Variables
| Name         | Description           | Default | Global |
| ------------ | --------------------- | ------- | ------ |
| --bg-color   | Color of the canvasBg | #f7f7f7 | -      |
| --font-color | Color of the font     | #002EFF | -      |

## ProgressCircle
![图片](https://shenshipin-1253925857.cos.ap-guangzhou.myqcloud.com/2022/08/11/MHRw8SQmA4N9eVZidW6K1KIR8qTng3qcVnkzD5GCsY8rePFV99U9qdwtjP8x7hGm_WGiffS4YWechatIMG385.jpeg?imageMogr2/format/webp/thumbnail/!100p)

```js
import { ProgressCircle } from "canvas-design-ui";

<ProgressCircle
    percent={60}
    style={{
        '--size': '180px',
        '--track-width': '12px',
        '--fill-color': '#ff8f1f',
    }}
>
    <div style={{ fontSize: '18px' }}>60%</div>
</ProgressCircle>
```

### Props
| Name     | Description                 | Type            | Default |
| -------- | --------------------------- | --------------- | ------- |
| percent  | Percent of the water sphere | number          | -       |
| children | Customized information      | React.ReactNode | -       |

### CSS Variables
| Name          | Description                    | Default | Global |
| ------------- | ------------------------------ | ------- | ------ |
| --fill-color  | Color of the fill part         | #1677ff | -      |
| --size        | Width and height of the canvas | 80px    | -      |
| --track-color | Color of the track             | #e5e5e5 | -      |
| --track-width | Width of the line              | 4px     | -      |
