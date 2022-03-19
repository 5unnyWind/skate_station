import React from 'react';
import makeStyles from '../utils/makeStyles'

export default function Custom404() {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <div >
                <h1>404 - Page Not Found</h1>
            </div>
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