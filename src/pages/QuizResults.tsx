import {useQuery} from '@apollo/client';
import {Container, Heading, HStack, useToast, VStack} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {QuizResultsList} from '../components/quiz-results/QuizResultsList';
import {GET_QUIZ_RESULTS} from '../graphql/queries';

export const QuizResults = () => {
	const {quizId} = useParams();
	const {data, loading, error} = useQuery(GET_QUIZ_RESULTS, {variables: {data: {quizId: quizId!}}});
	const toast = useToast({position: 'top-right', isClosable: true});

	useEffect(() => {
		if (error) {
			toast({status: 'error', title: error.message});
			console.log(error);
		}
	}, [error]);

	return (
		<VStack w='full'>
			<HStack w='full' mb={5} bgColor='whiteAlpha.100' py={5} rounded='lg' justify='center'>
				<Heading as='h2' size='lg'>Quiz results</Heading>
			</HStack>
			<Container h={'full'} overflowY='scroll' maxW='90%'>
				<QuizResultsList quizId={quizId!} />
			</Container>
		</VStack >

	);
};
