import {useMutation, useQuery} from '@apollo/client';
import {useSetAtom} from 'jotai';
import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ME} from './graphql/queries';
import {Created} from './pages/Created';
import {CreateQuiz} from './pages/CreateQuiz';
import {Explore} from './pages/Explore';
import {LoginPage} from './pages/LoginPage';
import {MainPage} from './pages/MainPage';
import {Results} from './pages/Results';
import {SignUpPage} from './pages/SignUpPage';
import {userAtom} from './store';

function App() {
	const {data, loading, error} = useQuery(ME);
	const setUser = useSetAtom(userAtom);

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		if (accessToken) {
			if (data) {
				setUser({
					firstname: data.me.firstname!,
					lastname: data.me.lastname!,
					email: data.me.email,
				});
			}
		}
	}, []);

	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/signup' element={<SignUpPage />} />
			<Route path='/' element={<MainPage />} >
				<Route path='explore' element={<Explore />} />
				<Route path='results' element={<Results />} />
				<Route path='created' element={<Created />} />
				<Route path='create' element={<CreateQuiz />} />
				<Route path='*' element={<Navigate to='explore' />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
