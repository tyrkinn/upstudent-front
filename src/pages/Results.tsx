import React from 'react';
import {useQuery} from '@apollo/client';
import {Container, Flex, Heading, HStack, useToast, VStack} from '@chakra-ui/react';
import {useEffect} from 'react';
import {GET_RESULTS} from '../graphql/queries';
import {ResultList} from '../components/results/ResultList';

export const Results = () => (
	<VStack w='full'>
		<HStack w='full' mb={5} bgColor='whiteAlpha.100' py={5} rounded='lg' justify='center'>
			<Heading as='h2' size='lg'>Your results</Heading>
		</HStack>
		<Container h={'full'} overflowY='scroll' maxW='90%'>
			<ResultList />
		</Container>
	</VStack >
);
