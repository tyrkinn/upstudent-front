import React from 'react';
import type {GetAllQuizesQuery, Quiz} from '../../graphql/gql/graphql';
import {Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, List, Text} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

export type QuizItemProps = {
	quiz: GetAllQuizesQuery['allQuizes'][number];
};

export const QuizItem: React.FC<QuizItemProps> = ({quiz}) => {
	const navigate = useNavigate();
	return (
		<Card w='full'>
			<CardHeader>
				<HStack justify='space-between'>
					<Heading size='md'>{quiz.title}</Heading>
					<Text fontSize='sm'>By {quiz.author.firstname} {quiz.author.lastname}</Text>
				</HStack>
			</CardHeader>
			<CardBody>
			</CardBody>
			<CardFooter px={5}>
				<Button w='full' onClick={() => {
					navigate('/solve/' + quiz.id);
				}}>Solve</Button>
			</CardFooter>
		</Card>
	);
};
