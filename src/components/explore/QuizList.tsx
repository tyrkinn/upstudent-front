import React, {useEffect} from 'react';
import {SimpleGrid, Spinner, useToast, VStack} from '@chakra-ui/react';
import {useAtomValue, useSetAtom} from 'jotai';
import {filteredQuizesAtom, quizesAtom} from '../../store';
import {QuizItem} from './QuizItem';
import {useQuery} from '@apollo/client';
import {GET_ALL_QUIZES} from '../../graphql/queries';

export const QuizList = () => {
	const setQuizes = useSetAtom(quizesAtom);
	const filteredQuizes = useAtomValue(filteredQuizesAtom);
	const {data, loading, error} = useQuery(GET_ALL_QUIZES);
	const toast = useToast({position: 'top-right', isClosable: true});

	useEffect(() => {
		if (data) {
			setQuizes(data.allQuizes);
		}
	}, [data]);

	useEffect(() => {
		if (error) {
			toast({status: 'error', title: error.message});
		}
	}, [error]);

	if (loading) {
		return (
			<VStack h='full' w='full' justifyContent='center' alignItems='center'>
				<Spinner />
			</VStack>
		);
	}

	return (
		<SimpleGrid h='full' columns={4} justifyContent='space-evenly' w='full' mt={10} spacing={5}>
			{filteredQuizes.map(q => (
				<QuizItem key={q.id} quiz={q} />
			))}
		</SimpleGrid>
	);
};
