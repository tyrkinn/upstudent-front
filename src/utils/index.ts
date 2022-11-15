export const clearTokens = () => {
	localStorage.removeItem('refresh-token');
	localStorage.removeItem('access-token');
};
