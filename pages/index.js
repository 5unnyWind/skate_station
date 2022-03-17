import { Tabs } from '@geist-ui/core'
import React from 'react'

export default function index() {
    return (
        <>
            <Tabs initialValue='1'>
                <Tabs.Item label='主页' value='1'>
                    <h1 >Skate Station</h1>




                </Tabs.Item>
                <Tabs.Item label='资讯' value='2'>
                </Tabs.Item>
                <Tabs.Item label='板技' value='3'>
                </Tabs.Item>
                <Tabs.Item label='交流' value='4'>
                </Tabs.Item>
                <Tabs.Item label='我们' value='5'>
                </Tabs.Item>

            </Tabs>
        </>
    )
}
