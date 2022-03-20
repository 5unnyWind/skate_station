/**
 * 还没写的页面说明占位组件
 */

import { Image, Note, Divider, Text } from '@geist-ui/core'
import makeStyles from '../../utils/makeStyles'


export default function index() {
    const classes = useStyles()
    return (
        <>
            <Note type="warning" label='CONSTRUCTING'>别看了，这页还没写</Note>
            <div style={{ position: 'relative' }}>
                <Image src='littlePrince.png' w={100} ></Image>
                <div className={classes.mask}></div>
            </div>
            <Divider>Fin.</Divider>
            <Text></Text>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0)',
    },
}))
