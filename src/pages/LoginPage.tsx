import type {FormEvent} from 'react';
import {useEffect} from 'react';
import React from 'react';
import {Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, useToast, VStack} from '@chakra-ui/react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {LOGIN} from '../graphql/mutations';

export const LoginPage = () => {
	const [login, {data, error}] = useMutation(LOGIN);
	const toast = useToast({position: 'top-right', isClosable: true});
	const navigate = useNavigate();

	const sumbmitForm = async (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		try {
			await login({
				variables:
				{
					data: {
						email: formData.get('email') as string,
						password: formData.get('password') as string,
					},
				},
			});
		} catch (e: unknown) {
			console.log((e as Error).message);
			toast({status: 'error', title: (e as Error).message});
		}
	};

	useEffect(() => {
		if (data) {
			localStorage.setItem('accessToken', data?.login.accessToken);
			localStorage.setItem('refreshToken', data?.login.refreshToken);
			navigate('/');
		}
	}, [data]);

	return (
		<Flex justify={'center'} align='center' w='100vw' h='100vh'>
			<VStack h='50%' w='full'>
				<Heading size='md' mb={5}>Log in to Upstudent</Heading>
				<VStack
					as='form'
					bgColor='blackAlpha.300'
					py={10}
					px={20}
					rowGap={5}
					w={'30%'}
					shadow='lg'
					rounded='lg'
					onSubmit={async e => sumbmitForm(e)}
				>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input type='email' name='email' placeholder='name@example.com' />
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input type='password' name='password' placeholder='name@example.com' />
					</FormControl>
					<Button type='submit' w='full' fontWeight='normal' px={10} py={5} bgColor='purple.700' width='50%'>Log in</Button>
					<Link to='/signup'>Or Signup</Link>
				</VStack>
			</VStack>
		</Flex>

	);
};
