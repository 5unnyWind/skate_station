import { GeistProvider, CssBaseline, Themes } from '@geist-ui/core'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const ayu =  Themes.createFromDark({
        type:'ayu-dark',
        palette:{
            background:'#1f2430'
        }
    })

    return (
        <GeistProvider themeType='ayu-dark' themes={[ayu]}>
            <CssBaseline />
            <Component {...pageProps} />
        </GeistProvider>
    )
}

export default MyApp