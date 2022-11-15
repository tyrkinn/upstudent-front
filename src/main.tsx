import {ApolloProvider} from '@apollo/client';
import type {ThemeConfig} from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {client} from './graphql';
import {extendTheme} from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const chakraTheme = extendTheme({config});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<ChakraProvider theme={chakraTheme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</ApolloProvider>,
);
