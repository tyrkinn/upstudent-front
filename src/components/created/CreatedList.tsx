import React, {useEffect} from 'react';
import {SimpleGrid, Spinner, useToast, VStack} from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {GET_CREATED} from '../../graphql/queries';
import {CreatedItem} from './CreatedItem';

export const CreatedList = () => {
	const {data, loading, error} = useQuery(GET_CREATED);
	const toast = useToast({position: 'top-right', isClosable: true});

	useEffect(() => {
		if (error) {
			toast({status: 'error', title: error.message});
		}
	}, [error]);

	if (loading) {
		return (
			<VStack h='full' w='full' justifyContent='center' alignItems='center'>
				<Spinner />
			</VStack>
		);
	}

	return (
		<SimpleGrid h='full' columns={4} justifyContent='space-evenly' w='full' mt={10} spacing={5}>
			{data?.listCreated.map(c => (
				<CreatedItem key={c.id} createdItem={c} />
			))}
		</SimpleGrid>
	);
};
