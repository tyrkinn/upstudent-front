
import React from 'react';
import type {GetCreatedQuery} from '../../graphql/gql/graphql';
import {Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, List, Text} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

export type CreatedItemProps = {
	createdItem: GetCreatedQuery['listCreated'][number];
};

export const CreatedItem: React.FC<CreatedItemProps> = ({createdItem}) => {
	const navigate = useNavigate();
	return (
		<Card w='full'>
			<CardHeader>
				<HStack justify='space-between'>
					<Heading size='md'>{createdItem.title}</Heading>
				</HStack>
			</CardHeader>
			<CardBody>
			</CardBody>
			<CardFooter px={5}>
				<Button w='full' onClick={() => {
					navigate(`/quizResult/${createdItem.id}`);
				}}>Check results</Button>
			</CardFooter>
		</Card>
	);
};
