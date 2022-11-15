import type {FormEvent} from 'react';
import {useEffect} from 'react';
import React from 'react';
import {Button, Flex, FormControl, FormLabel, Heading, Input, useToast, VStack} from '@chakra-ui/react';
import {Link, useNavigate} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {SIGNUP} from '../graphql/mutations';

export const SignUpPage = () => {
	const [signup, {data, loading, error}] = useMutation(SIGNUP);
	const navigate = useNavigate();
	const toast = useToast({position: 'top-right', isClosable: true});

	const formSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		if (formData.get('password') !== formData.get('password_repeat')) {
			toast({status: 'error', title: 'Password must match'});
		}

		const data = {
			firstname: formData.get('firstname') as string,
			lastname: formData.get('lastname') as string,
			password: formData.get('password') as string,
			email: formData.get('email') as string,
		};

		console.log(data);

		try {
			await signup({
				variables: {
					data,
				},
			});
		} catch (e: unknown) {
			console.log((e as Error));
		}

		if (error) {
			toast({title: error.message});
			console.log(error);
		}
	};

	useEffect(() => {
		if (data) {
			localStorage.setItem('accessToken', data.signup.accessToken);
			localStorage.setItem('refreshToken', data.signup.refreshToken);
			navigate('/');
		}
	}, [data]);

	return (
		<Flex justify={'center'} alignItems='center' w='100vw' h='100vh'>
			<VStack h='50%' w='full'>
				<Heading size='md' mb={5}>Sign up to Upstudent</Heading>
				<VStack as='form' onSubmit={async e => formSubmit(e)} bgColor='blackAlpha.300' py={10} px={20} rowGap={5} w={'30%'} shadow='lg' rounded='lg'>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input type='email' name='email' placeholder='name@example.com' />
					</FormControl>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input type='text' name='firstname' placeholder='John' />
					</FormControl>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input type='text' name='lastname' placeholder='Doe' />
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input type='password' name='password' placeholder='********' />
					</FormControl>
					<FormControl>
						<FormLabel>Repeat Password</FormLabel>
						<Input type='password' name='password_repeat' placeholder='********' />
					</FormControl>
					<Button isLoading={loading} type='submit' fontWeight='normal' px={10} py={5} bgColor='purple.700' width='50%'>Signup</Button>
					<Link to='/login'>Or Login</Link>
				</VStack>
			</VStack>

		</Flex>
	);
};
