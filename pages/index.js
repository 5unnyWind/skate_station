import React from 'react'
import { Tabs, Image, useTheme, Card } from '@geist-ui/core'
import { createUseStyles } from 'react-jss'
import makeStyles from '../utils/makeStyles'

// const useStyles = make(theme => ({
//     content: {
//         width: theme.layout.pageWidthWithMargin,
//         margin: "0 auto",
//     }
// }))

// function make(styles) {
//     const theme = useTheme()
//     return createUseStyles(styles(theme))
// }



export default function index() {

    const classes = useStyles()

    const Home = () => {
        return <>
            <div style={{width:'100%',position:'relative'}}>

                <Image className={classes.image} src='0.gif' width={100} ></Image>
                <div className={classes.mask}></div>
                <h1 className={classes.centerText}># Skate Station</h1>
            </div>
        </>
    }


    return (
        <>
            <div className={[classes.content]}>

                <Tabs initialValue='/' align={'center'}>
                    <Tabs.Item label={<h3>主页</h3>} value='/'>
                        <Home />
                    </Tabs.Item>

                    <Tabs.Item label={<h3>资讯</h3>} value='/news'>
                    </Tabs.Item>

                    <Tabs.Item label={<h3>板技</h3>} value='/skills'>
                    </Tabs.Item>

                    <Tabs.Item label={<h3>交流</h3>} value='/talk'>
                    </Tabs.Item>

                    <Tabs.Item label={<h3>我们</h3>} value='/us'>
                    </Tabs.Item>

                </Tabs>
            </div>

        </>
    )
}

const useStyles = makeStyles(theme => ({
    content: {
        width: theme.layout.pageWidthWithMargin,
        margin: "0 auto",
    },
    image:{
        "&::after":{
            content:'',
            width:100,
            height:100,
            background:'rbga(1,2,3,0)'
        }
    },
    mask: {

            position: 'absolute',
            left:0,
            top:0,
            width: '100%',
            height: '100%',
            background:'rgba(0,0,0,0.1)'
    },
    centerText: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)'
    }
}))