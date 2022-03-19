// 动态引入，取消 ssr
import dynamic from 'next/dynamic'
const Menu = dynamic(import('./Menu'),{
    ssr:false
})

export default Menu