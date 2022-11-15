
import React from 'react';
import type {GetCreatedQuery} from '../../graphql/gql/graphql';
import {Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, List, Text} from '@chakra-ui/react';

export type CreatedItemProps = {
	createdItem: GetCreatedQuery['listCreated'][number];
};

export const CreatedItem: React.FC<CreatedItemProps> = ({createdItem}) => (
	<Card w='full'>
		<CardHeader>
			<HStack justify='space-between'>
				<Heading size='md'>{createdItem.title}</Heading>
			</HStack>
		</CardHeader>
		<CardBody>
		</CardBody>
		<CardFooter px={5}>
			<Button w='full'>Редактировать</Button>
		</CardFooter>
	</Card>
);
