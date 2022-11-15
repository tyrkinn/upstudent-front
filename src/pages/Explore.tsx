import React from 'react';
import {Container, Grid, Heading, HStack, VStack} from '@chakra-ui/react';
import {SearchBar} from '../components/explore/SearchBar';
import {QuizList} from '../components/explore/QuizList';

export const Explore = () => (
	<VStack maxH='full' >
		<HStack w='full' mb={5} bgColor='whiteAlpha.100' py={5} rounded='lg' justify='center'>
			<Heading as='h2' size='lg'>Explore tests</Heading>
		</HStack>
		<Container h={'full'} overflowY='scroll' maxW='container.xl'>
			<SearchBar />
			<QuizList />
		</Container>
	</VStack>
);
