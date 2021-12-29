import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/vendors/index.scss'
import { GlobalStyle } from '../styles/global-styles'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Multi Step Form</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<ToastContainer />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</>
	)
}
