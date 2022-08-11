import React, { CSSProperties, FC } from 'react';
import { NativeProps } from '../../utils/native-props';
import styles from './index.module.less';

export type ProgressCircleProps = {
    percent?: number;
    children?: React.ReactNode;
} & NativeProps<'--size' | '--track-width' | '--track-color' | '--fill-color'>;

const ProgressCircle: FC<ProgressCircleProps> = props => {
    const style: CSSProperties & Record<'--percent', string> = {
        ...props.style,
        '--percent': props.percent.toString(),
    };

    return (
        <div className={styles.progressCircle} style={style}>
            <div className={styles.content}>
                <svg className={styles.svg}>
                    <circle className={styles.track} fill='transparent' />
                    <circle className={styles.fill} fill='transparent' />
                </svg>
                <div className={styles.info}>{props.children}</div>
            </div>
        </div>
    );
};

export default ProgressCircle;