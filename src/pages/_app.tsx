import '@/styles/globals.css'
import '@/styles/flex-directions.css'
import '@/styles/margins.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}
