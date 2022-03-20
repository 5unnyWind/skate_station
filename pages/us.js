import makeStyles from '../utils/makeStyles'
import { Image, Note, Divider, Text } from '@geist-ui/core'
import LittlePrince from '../components/LittlePrince'


export default function us() {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <LittlePrince />
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