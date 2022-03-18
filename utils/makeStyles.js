// 生成 jss 样式工具

import { createUseStyles } from 'react-jss';
import { useTheme } from "@geist-ui/core";


const useStyles = (styles) => {
    const theme = useTheme();
    if (typeof styles === 'function') {
        styles = styles(theme);
    }
    return createUseStyles(styles)();
};

const makeStyles = (styles) => {
    return (() => useStyles(styles));
}

export default makeStyles