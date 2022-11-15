/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NormalizedCacheObject } from '@apollo/client';
import { createHttpLink, fromPromise, from } from '@apollo/client';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { clearTokens } from '../utils';
import { REFRESH_TOKEN } from './mutations';
import { onError } from '@apollo/client/link/error';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const getNewToken = async (): Promise<string> => {
	const token = localStorage.getItem('refreshToken');

	if (!token) {
		throw new Error();
	}

	const { data } = await apolloClient.mutate({ mutation: REFRESH_TOKEN, variables: { token } });
	return data!.refreshToken.accessToken as string;
};

const errorLink = onError(
	({ graphQLErrors, operation, forward }) => {
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				switch (err.extensions.code) {
					case 'UNAUTHENTICATED':
						return fromPromise(
							getNewToken().catch(() => {
								clearTokens();
								throw new Error('Invalid token');
							}),
						).filter(value => Boolean(value))
							.flatMap(accessToken => {
								const oldHeaders: any = operation.getContext().headers;
								localStorage.setItem('accessToken', accessToken);
								operation.setContext({
									headers: {
										...oldHeaders,
										authorization: `Bearer ${accessToken}`,
									},
								});
								return forward(operation);
							});
					default: break;
				}
			}
		}
	},
);

const httpLink = createHttpLink({
	uri: 'https://upstudents.herokuapp.com/graphql',
	// Uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('accessToken');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const link = from([errorLink, authLink, httpLink]);
apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link,
});
export default apolloClient;
