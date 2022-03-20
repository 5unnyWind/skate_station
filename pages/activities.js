import makeStyles from '../utils/makeStyles'
import { Image, Note, Divider, Text } from '@geist-ui/core'

export default function activities() {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <Note type="warning" label='CONSTRUCTING'>别看了，这页还没写</Note>
            <Image src='littlePrince.png' w={100} ></Image>
            <Divider>Fin.</Divider>
            <Text></Text>
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