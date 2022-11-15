
import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Progress, Text, VStack } from '@chakra-ui/react';
import type { GetQuizResultsQuery } from '../../graphql/gql/graphql';
import { useNavigate } from 'react-router-dom';

export type QuizResultItemProps = {
	resultItem: GetQuizResultsQuery['listQuizResults'][number];
};

export const QuizResultItem: React.FC<QuizResultItemProps> = ({ resultItem }) => {
	const navigate = useNavigate();
	return (
		<Card w='full'>
			<CardHeader>
				<HStack justify='space-between'>
					<Heading size='md'>{resultItem.userFullName}</Heading>
				</HStack>
			</CardHeader>
			<CardBody pb={0}>
				<VStack m={0} p={0}>
					<Progress mb={3} rounded='lg' w='full' colorScheme='green' value={resultItem.points === 0 ? 0 : (resultItem.points / resultItem.total * 100)} />
					<HStack w='full' p={0} m={0}>
						<Text>Result: </Text>
						<Text m={0} p={0}>{resultItem.points === 0 ? 0 : (resultItem.points / resultItem.total * 100)} %</Text>
					</HStack>
				</VStack>
			</CardBody>
			<CardFooter>
			</CardFooter>
		</Card>

	);
};
