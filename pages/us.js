import makeStyles from '../utils/makeStyles'
import { Image, Note, Divider, Text, User, Tooltip } from '@geist-ui/core'
import LittlePrince from '../components/LittlePrince'


export default function us() {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <LittlePrince />
            <Text b i style={{ letterSpacing: '0.6px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Text span type="success">D</Text>
                <Text span type="warning">e</Text>
                <Text span type="secondary">s</Text>
                <Text span type="error">i</Text>
                <Text span style={{ color: '#ccc' }}>g</Text>
                <Text span type="warning">n</Text>
                <Text span type="success" ml="5px">By</Text>
                <Tooltip text='sunny-wind@qq.com' placement='bottom'>
                    <User style={{ position: 'relative', top: 5 }} src='https://gitee.com/sunny_f/img-bed/raw/master/tinytf.jpg' name='听枫' ></User>
                </Tooltip>
            </Text>
        </div>
    )
}
const useStyles = makeStyles(theme => ({
    content: {
        width: theme.layout.pageWidthWithMargin,
        maxWidth: "100%",
        boxSizing: "border-box",
        margin: "0 auto",
        padding: `0 ${theme.layout.pageMargin}`,
    },
}))