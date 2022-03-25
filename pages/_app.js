import { GeistProvider, CssBaseline, Themes, useTheme, useTabs } from '@geist-ui/core'
import '../styles/globals.css'
import Menu from '../components/Menu/Menu'
import { JssProvider } from 'react-jss'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  const theme = useTheme()
  const ayu = Themes.createFromDark({
    type: 'ayu-dark',
    palette: {
      background: '#1f2430'
    }
  })

  return (
    <>
      <Head>
        <title>Gothic Skate · NCU Skate Station</title>
        <meta name="title" content="Gothic Skate · NCU Skate Station" />
        <meta name="description" content="NCU Gothic 滑板小站" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skate-station.vercel.app/" />
        <meta property="og:title" content="Gothic Skate · NCU Skate Station" />
        <meta property="og:description" content="NCU Gothic 滑板小站" />
      </Head>
      <JssProvider>
        <GeistProvider themeType='ayu-dark' themes={[ayu]}>
          <CssBaseline />
          <Menu></Menu>
          <Component {...pageProps} />
          <style global jsx>{`
          html {
            --geist-page-nav-height: 64px;
          }
          body::-webkit-scrollbar {
            width: 0;
            background-color: ${theme.palette.accents_1};
          }
          body::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.accents_2};
            border-radius: ${theme.layout.radius};
          }
          `}</style>
        </GeistProvider>
      </JssProvider>
    </>

  )
}

export default MyApp