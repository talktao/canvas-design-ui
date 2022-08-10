import React, { FC, useEffect, useRef, useState } from "react";
import { NativeProps } from '../utils/native-props';
import styles from './index.module.less';

type WaterSphereProps = {
    height: number;
    percent: number;
    gradientColorData?: [];
    children?: React.ReactNode;
} & NativeProps<'--font-color' | '--bg-color'>;

const WaterSphere: FC<WaterSphereProps> = props => {
    let {
        height = 160,
        percent,
        style,
        gradientColorData = [[0, '#ffffff'], [0.5, '#00EDFF'], [1, '#002EFF']],
    } = props;

    const [radio, setRadio] = useState(1);
    let root = useRef<any>(null);
    let node = useRef<any>(null);
    let timer = useRef(0);

    useEffect(() => {
        renderChart('update');
        resize();
    }, [percent]);// eslint-disable-line

    const resize = () => {

        if (root.current) {
            const { offsetWidth } = root.current.parentNode;
            setRadio(offsetWidth < height ? offsetWidth / height : 1);
        }
    };

    const renderChart = (type = '') => {
        const data = percent / 100;
        window.cancelAnimationFrame(timer.current);

        if (!node.current || (data !== 0 && !data)) {
            return;
        }

        const canvas = node.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
            return;
        }

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const radius = canvasWidth / 2;
        const lineWidth = 0;
        const cR = radius - lineWidth;

        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;

        const axisLength = canvasWidth - lineWidth;
        const unit = axisLength / 8;
        const range = 0.2; // 振幅
        let currRange = range;
        const xOffset = lineWidth;
        let sp = 0; // 周期偏移量
        let currData = 0;
        const waveupsp = 0.005; // 水波上涨速度

        const drawSin = () => {
            if (!ctx) {
                return;
            }
            ctx.beginPath();
            ctx.save();

            const sinStack = [] as any;
            for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                const x = sp + (xOffset + i) / unit;
                const y = Math.sin(x) * currRange;
                const dx = i;
                const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;

                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }

            const startPoint = sinStack.shift();

            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);

            const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);

            // 遍历渐变色
            (() => {

                if (!ctx) {
                    return;
                }
                const addColorStop = gradientColorData.map(item => {
                    return gradient.addColorStop(item[0], item[1]);
                });
                return addColorStop;
            })();

            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        };

        const render = () => {

            if (!ctx) {
                return;
            }
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            if (type === "update") {
                if (data >= 0.85) {
                    if (currRange > range / 4) {
                        const t = range * 0.01;
                        currRange -= t;
                    }
                } else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        const t = range * 0.01;
                        currRange += t;
                    }
                } else {
                    if (currRange <= range) {
                        const t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        const t = range * 0.01;
                        currRange -= t;
                    }
                }
                if (data - currData > 0) {
                    currData += waveupsp;
                }
                if (data - currData < 0) {
                    currData -= waveupsp;
                }
                sp += 0.07;
                drawSin();
            }
            timer.current = window.requestAnimationFrame(render);
        };
        render();
    };

    return (
        <div className={styles.main} style={style}>
            <div className={styles.content} ref={root} style={{ width: height, height: height, transform: `scale(${radio})` }}  >
                <canvas
                    className={styles.canvas}
                    ref={node}
                    width={height * 2}
                    height={height * 2}
                />
                <div className={styles.info}>{props.children}</div>
            </div >
        </div>

    );
};

export default WaterSphere;
