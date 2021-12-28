import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '../styles/vendors/index.scss'
import { GlobalStyle } from '../styles/global-styles'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Multi Step Form</title>
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</>
	)
}
