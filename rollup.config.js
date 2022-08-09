// 根据tsconfig.json配置执行ts转换
import typescript from 'rollup-plugin-typescript2';
// 帮助 Rollup 查找外部模块
import resolve from '@rollup/plugin-node-resolve';
// 将CommonJS模块转换为 ES2015 供 Rollup 处理
import commonjs from '@rollup/plugin-commonjs';
// Rollup 集成 Babel，转义代码
import babel from '@rollup/plugin-babel';
// 查看打包文件大小
import filesize from 'rollup-plugin-filesize';
// 处理less
import postcss from 'rollup-plugin-postcss';
// 在生产环境下，压缩js代码
import { terser } from 'rollup-plugin-terser';
// 配合peerDependencies使用
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

// 新增以下处理函数
const processLess = function (context) {
    return new Promise((resolve, reject) => {
        less.compile(
            {
                file: context,
            },
            function (err, result) {
                if (!err) {
                    resolve(result);
                } else {
                    reject(result);
                }
            }
        );
        less.compile(context, {}).then(
            function (output) {
                if (output && output.css) {
                    resolve(output.css);
                } else {
                    reject({});
                }
            },
            function (err) {
                reject(err);
            }
        );
    });
};

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        postcss({ process: processLess }),
        peerDepsExternal(),
        typescript({ tsconfig: 'tsconfig.json', useTsconfigDeclarationDir: true }),
        babel({
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: '**/node_modules/**',
        }),
        terser(),
        filesize(),
    ],
};