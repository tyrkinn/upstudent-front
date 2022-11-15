import React from 'react';
import {Container, Heading, HStack, VStack} from '@chakra-ui/react';
import {CreatedList} from '../components/created/CreatedList';

export const Created = () => (
	<VStack w='full'>
		<HStack w='full' mb={5} bgColor='whiteAlpha.100' py={5} rounded='lg' justify='center'>
			<Heading as='h2' size='lg'>Created quizes</Heading>
		</HStack>
		<Container h={'full'} overflowY='scroll' maxW='90%'>
			<CreatedList />
		</Container>
	</VStack >
);
