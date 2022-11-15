import React, {useEffect} from 'react';
import type {StackProps} from '@chakra-ui/react';
import {useToast} from '@chakra-ui/react';
import {Spinner} from '@chakra-ui/react';
import {HStack} from '@chakra-ui/react';
import {forwardRef, VStack} from '@chakra-ui/react';
import {Logo} from './Logo';
import {UserIcon} from './UserIcon';
import {useQuery} from '@apollo/client';
import {ME} from '../../graphql/queries';
import {LinkList} from '../sidebar/LinkList';
import {useNavigate} from 'react-router-dom';

export const Sidebar = forwardRef<StackProps, 'div'>(({...props}, ref) => {
	const {data, loading, error, refetch} = useQuery(ME);
	const navigate = useNavigate();

	const toast = useToast();
	if (error) {
		toast({title: error.message});
	}

	const refetchUser = async () => refetch();

	useEffect(() => {
		refetchUser().then(() => {
			console.log('User refetched');
		}).catch(e => {
			if ((e as Error).message === 'Invalid token') {
				navigate('/login');
			}
		});
	}, []);

	useEffect(() => {
		if (data === undefined && !loading) {
			navigate('/login');
		}
	}, [data]);

	if (loading) {
		return (
			<Spinner></Spinner>
		);
	}

	return (
		<VStack {...props} ref={ref} h='full' py={5} px={5} bgColor='gray.900' roundedRight='2xl'>
			<HStack w='full' justifyContent={'space-between'}>
				<Logo />
				<UserIcon user={data.me} loading={loading} />
			</HStack>
			<LinkList h='full' />
		</VStack>
	);
});
