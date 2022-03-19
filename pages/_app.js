import { GeistProvider, CssBaseline, Themes, useTheme } from '@geist-ui/core'
import '../styles/globals.css'
import Menu from '../components/menu/menu'
import { JssProvider } from 'react-jss'


function MyApp({ Component, pageProps }) {
  const theme = useTheme()
  const ayu = Themes.createFromDark({
    type: 'ayu-dark',
    palette: {
      background: '#1f2430'
    }
  })

  return (
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
  )
}

export default MyApp