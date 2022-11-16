import {HStack, VStack, Text, CheckboxGroup, RadioGroup, Radio, Button, useToast} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import type {GetQuizQuery} from '../../graphql/gql/graphql';

export type SolveQuestionProps = {
	question: GetQuizQuery['quiz']['questions'][number];
	addAnswer: (_: string) => void;
	nextQuestion: () => void;
};

export const SolveQuestion: React.FC<SolveQuestionProps> = ({question, addAnswer, nextQuestion}) => {
	const [answerId, setAnswerId] = useState('');
	const toast = useToast({position: 'top-right', isClosable: true});
	const onAddAnswer = () => {
		if (answerId.trim() === '') {
			toast({status: 'error', title: 'You should select answer first'});
			return;
		}

		addAnswer(answerId);
		nextQuestion();
	};

	return (
		<VStack w='60%' alignItems='center' py={10} justifyContent='center' bgColor='blackAlpha.200' spacing={5} h='60%' rounded='xl'>
			<VStack w='full' spacing={9}>
				<HStack>
					<Text fontWeight='semibold' fontSize='3xl'>{question.text}</Text>
				</HStack>
				<RadioGroup onChange={setAnswerId} bgColor='whiteAlpha.50' rounded='xl' p={10} my={5} w='40%' value={answerId}>
					<VStack w='100%' alignItems='start' spacing={5}>
						{question.answers.map(a => (
							<Radio key={a.id} value={a.id}>{a.text}</Radio>
						))}
					</VStack>
				</RadioGroup>
				<Button onClick={onAddAnswer} w='30%'>Next</Button>
			</VStack>
		</VStack>
	);
};
