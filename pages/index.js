import React from 'react'
import { Image, useTheme, Card, Spacer, Text, Divider, Collapse, Link, Dot, User, Tooltip, Loading } from '@geist-ui/core'
import { ArrowRightCircle } from '@geist-ui/icons'

import makeStyles from '../utils/makeStyles'
import { Loader } from '@geist-ui/icons'


export default function index() {
    const theme = useTheme()
    const classes = useStyles()

    const BaseCard = ({ to, children }) => {
        return (
            <Card hoverable className={classes.card}>
                <div>
                    {children}
                    <Spacer></Spacer>
                    {to &&
                        <Link href={to} block >
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
    const ActiCard = () => {
        return (
            <BaseCard to={'/activities'}>
                <div className={classes.row}>
                    <div>
                        <Text h3>滑板社活动</Text>
                        <Divider style={{ width: '60%' }}></Divider>
                        <Text style={{ color: theme.palette.accents_4 }}>拿起滑板 抢回街道</Text>
                    </div>
                    <div style={{ width: '80%', marginLeft: 35 }}>
                        <Divider type='default'>正在进行的活动</Divider>
                        <div style={{ display: "flex", width:'100%',flexDirection: 'row' }}>
                            <Dot type='success' />
                            <User src='avator.jpg' name='Aye'></User>
                            <Text> 正在八一广场直播过6立</Text>
                            <Text style={{ color: theme.palette.accents_4 ,flex:1,textAlign:'end'}}> 2022/3/19 </Text>
                        </div>
                        <Spacer></Spacer>
                        <Divider type='default'>已经结束的活动</Divider>
                        <Text style={{textAlign:'center'}}>
                            <Spacer></Spacer>
                            <Loading />    
                        </Text> 
                    </div>
                </div>
            </BaseCard>
        )
    }


    const Home = () => {
        return (
            <>
                <Spacer />
                <div className={classes.card}>
                    <Image className={classes.image} src='0.gif' width={100} ></Image>
                    <div className={classes.mask}></div>
                    <h1 className={classes.centerText}># Skate Station</h1>
                </div>
                <Spacer h={5} />
                <ActiCard />
                <Spacer h={5} />
                <SkillsCard />
                <Spacer h={5} />
                <NewsCard />
            </>
        )
    }


    return (
        <>
            <div className={[classes.content]}>
                <div className={classes.column}>
                    <Home />
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
    column: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: '100%',
        // flex: 1,
        // alignItems: "stretch",
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
        // 大屏设备
        row: {
            flexDirection: "row",
            flexWrap: "wrap",

        },
    },
}))