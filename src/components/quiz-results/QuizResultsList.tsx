
import React from 'react';
import {useQuery} from '@apollo/client';
import {Button, Card, CardBody, CardFooter, CardHeader, Flex, GridItem, Heading, HStack, SimpleGrid, Spinner, Text, useToast} from '@chakra-ui/react';
import {useEffect} from 'react';
import {GET_QUIZ_RESULTS, GET_RESULTS} from '../../graphql/queries';
import {QuizResultItem} from './QuizResultItem';

export const QuizResultsList = ({quizId}: {quizId: string}) => {
	const {data, loading, error} = useQuery(GET_QUIZ_RESULTS, {variables: {data: {quizId}}});
	const toast = useToast({position: 'top-right', isClosable: true});

	useEffect(() => {
		if (error) {
			toast({status: 'error', title: error.message});
		}
	}, [error]);

	if (loading) {
		return (
			<SimpleGrid h='full' w='full' placeItems='center'>
				<Spinner margin='auto' />
			</SimpleGrid>
		);
	}

	if (!loading && !data) {
		return (
			<Flex justifyContent='center' alignItems='center' w='full' h='full'>
				<Heading>
					Can&apos;t load page
				</Heading>
			</Flex>
		);
	}

	return (
		<SimpleGrid columns={4} h='full' justifyContent='space-evenly' w='full' spacing={5}>
			{data?.listQuizResults.map(t => (
				<QuizResultItem key={t.id} resultItem={t} />
			))}
		</SimpleGrid>
	);
};
