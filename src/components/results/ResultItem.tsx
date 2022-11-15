import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Progress, Text, VStack} from '@chakra-ui/react';
import type {GetUserResultsQuery} from '../../graphql/gql/graphql';

export type ResultItemProps = {
	resultItem: GetUserResultsQuery['listUserResults'][number];
};

export const ResultItem: React.FC<ResultItemProps> = ({resultItem}) => (
	<Card w='full'>
		<CardHeader>
			<HStack justify='space-between'>
				<Heading size='md'>{resultItem.quizTitle}</Heading>
			</HStack>
		</CardHeader>
		<CardBody pb={0}>
			<VStack m={0} p={0}>
				<Progress mb={3} rounded='lg' w='full' colorScheme='green' value={resultItem.points / resultItem.total * 100} />
				<HStack w='full' p={0} m={0}>
					<Text>Result: </Text>
					<Text m={0} p={0}>{resultItem.points / resultItem.total * 100} %</Text>
				</HStack>
			</VStack>
		</CardBody>
		<CardFooter px={5}>
			<Button w='full'>Пройти еще раз</Button>
		</CardFooter>
	</Card >

);
