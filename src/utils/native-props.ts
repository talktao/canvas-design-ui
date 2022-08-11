import React, { AriaAttributes } from 'react';
import type { CSSProperties } from 'react';

export type NativeProps<S extends string = never> = {
    className?: string;
    style?: CSSProperties & Partial<Record<S, string>>;
    tabIndex?: number;
} & AriaAttributes;