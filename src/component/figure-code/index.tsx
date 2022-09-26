import React from "react";
import { FC, useEffect, useRef, useState } from "react";

type FigureCodeProps = {
    width?: number | string;
    height?: number | string;
    onCheck?: (i: any) => void;
};

const FigureCode: FC<FigureCodeProps> = ({ width = 80, height = 40, onCheck }) => {
    const [code, setCode] = useState('');
    const codeRef = useRef(null);

    //生成随机数
    const randomNum = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    //生成随机颜色RGB分量
    const randomColor = (min: number, max: number) => {
        let _r = randomNum(min, max);
        let _g = randomNum(min, max);
        let _b = randomNum(min, max);
        return `rgb(${_r}, ${_g}, ${_b})`;
    };

    // 刷新验证码
    const onRefresh = (e: any) => {
        e.preventDefault();
        drawPic();
    };

    const drawPic = () => {
        //获取到元素canvas
        let canvasCode = codeRef.current as any;
        let _str = "0123456789";//设置随机数库
        let _picTxt = "";//随机数
        let _num = 4;//4个随机数字
        let _width = canvasCode.width;
        let _height = canvasCode.height;
        let ctx = canvasCode.getContext("2d");//获取 context 对象
        ctx.textBaseline = "bottom";//文字上下对齐方式--底部对齐
        ctx.fillStyle = randomColor(180, 240);//填充画布颜色
        ctx.fillRect(0, 0, _width, _height);//填充矩形--画画
        for (let i = 0; i < _num; i++) {
            let x = _width / _num * i;
            let y = _height;
            let deg = randomNum(-45, 45);
            let txt = _str[randomNum(0, _str.length)];
            _picTxt += txt;//获取一个随机数
            ctx.fillStyle = randomColor(10, 100);//填充随机颜色
            ctx.font = randomNum(25, 28) + "px SimHei";//设置随机数大小，字体为SimHei
            ctx.translate(x, y);//将当前xy坐标作为原始坐标
            ctx.fillText(txt, 3, -5);//绘制填色的文本
            ctx.translate(-x, -y);
        }
        for (let i = 0; i < _num; i++) {
            //定义笔触颜色
            ctx.strokeStyle = randomColor(90, 180);
            ctx.beginPath();
            //随机划线--4条路径
            ctx.moveTo(randomNum(0, _width), randomNum(0, _height));
            ctx.lineTo(randomNum(0, _width), randomNum(0, _height));
            ctx.stroke();
        }
        for (let i = 0; i < _num * 10; i++) {
            ctx.fillStyle = randomColor(0, 255);
            ctx.beginPath();
            //随机画圆，填充颜色
            ctx.arc(randomNum(0, _width), randomNum(0, _height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
        setCode(_picTxt);
    };

    useEffect(() => {
        drawPic();
    }, []);

    useEffect(() => {
        onCheck && onCheck(code);
    }, [code]);



    return <canvas ref={codeRef} width={width} height={height} onClick={onRefresh}></canvas>;
};

export default FigureCode;