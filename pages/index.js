import React, { useState } from 'react'
import { Tabs, Image, useTheme, Card, Spacer, Text, Divider, Collapse, Link, useTabs } from '@geist-ui/core'
import { ArrowRightCircle } from '@geist-ui/icons'
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
    const { setState: setTab, bindings } = useTabs('/')
    const theme = useTheme()
    const classes = useStyles()

    const BaseCard = ({ to, children }) => {
        return (
            <Card hoverable>

                <div>
                    {children}
                    <Spacer></Spacer>
                    {to &&
                        <Link href='javascript:;' onClick={() => { setTab(to) }} block >
                            <Text b className={classes.row} style={{ flexDirection: 'row' }}>
                                详细了解
                                <Spacer></Spacer>
                                <ArrowRightCircle></ArrowRightCircle>
                            </Text>
                        </Link>}
                </div>
            </Card>
        )
    }

    const SkillsCard = () => {
        return (
            <BaseCard to='/skills'>
                <div className={classes.row}>
                    <div>

                        <Text h2>Skills</Text>
                        <Divider style={{ width: '60%' }}></Divider>
                        <Text style={{ color: theme.palette.accents_4 }}>人在家中躺 板技心中涨</Text>
                    </div>
                    <div style={{ maxWidth: '80%', marginLeft: 25 }}>
                        <Collapse.Group>
                            <Collapse title="滑板常识" subtitle='INTRODUCTION'>
                                <Text>HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。
                                    它定义了网页内容的含义和结构。除 HTML 以外的其它技术则通常用来描述一个网页的表现与展示效果（如 CSS），
                                    或功能与行为（如 JavaScript）。</Text>
                            </Collapse>
                            <Collapse title="平地" subtitle='FLATGROUND'>
                                <Text>花式動作為主，玩法較趨近於一般街頭短板的方式，以翻板(Flip)，轉板(Shovit)等等動作為主
                                    剛入門滑行開始
                                    許多人最常碰到的風格應該就屬freestyle了
                                    平地花式玩法是不侷限於地形
                                    平地花式的招式沒有捷徑、但只要慢慢的循序漸進
                                    從最基本的開始練習
                                    我们相信你也能感受到那種成招的喜悅。</Text>

                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>
            </BaseCard>
        )
    }

    const NewsCard = () => {
        return (
            <BaseCard to={'/news'}>
                <div className={classes.row}>
                    <div>

                        <Text h2>News</Text>
                        <Divider style={{ width: '60%' }}></Divider>
                        <Text style={{ color: theme.palette.accents_4 }}>板圈新鲜事</Text>
                    </div>
                    <div style={{ maxWidth: '80%', marginLeft: 35 }}>
                        <Collapse.Group>
                            <Collapse title="滑板常识" subtitle='INTRODUCTION'>
                                <Text>HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。
                                    它定义了网页内容的含义和结构。除 HTML 以外的其它技术则通常用来描述一个网页的表现与展示效果（如 CSS），
                                    或功能与行为（如 JavaScript）。</Text>
                            </Collapse>
                            <Collapse title="平地" subtitle='FLATGROUND'>
                                <Text>花式動作為主，玩法較趨近於一般街頭短板的方式，以翻板(Flip)，轉板(Shovit)等等動作為主
                                    剛入門滑行開始
                                    許多人最常碰到的風格應該就屬freestyle了
                                    平地花式玩法是不侷限於地形
                                    平地花式的招式沒有捷徑、但只要慢慢的循序漸進
                                    從最基本的開始練習
                                    我们相信你也能感受到那種成招的喜悅。</Text>

                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>
            </BaseCard>
        )
    }


    const Home = () => {
        return (
            <>
                <Spacer></Spacer>
                <div className={classes.card}>

                    <Image className={classes.image} src='0.gif' width={100} ></Image>
                    <div className={classes.mask}></div>
                    <h1 className={classes.centerText}># Skate Station</h1>
                </div>
                <Spacer h={5}>
                </Spacer>
                <NewsCard></NewsCard>
                <Spacer h={5}></Spacer>
                <SkillsCard></SkillsCard>
            </>
        )
    }


    return (
        <>
            <div className={[classes.content]}>
                <div className={classes.row}>
                    <Tabs align={'center'}  {...bindings} >
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
            </div>

        </>
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
    row: {
        // 小屏设备
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 1,
        maxWidth: "100%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    nav: {
        position: '-webkit-sticky !important',
        position: 'sticky !important',
        top: 0,
    },
    card: {
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    image: {

    },
    mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.15)',
    },
    centerText: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)'
    },
    [`@media screen and (min-width: ${theme.layout.pageWidthWithMargin})`]: {
        row: {
            flexDirection: "row",
            flexWrap: "wrap",

        },
    }
}))