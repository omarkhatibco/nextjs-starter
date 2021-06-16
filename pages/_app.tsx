import { GlobalStyle, Seo } from 'components/system';
import { Providers } from 'context';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<Seo />
			<Providers>
				<Component {...pageProps} />
			</Providers>
		</>
	);
};

export default App;
