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
		<VStack w='80%'>
			<HStack>
				<Text>{question.text}</Text>
			</HStack>
			<RadioGroup onChange={setAnswerId} value={answerId}>
				<VStack>
					{question.answers.map(a => (
						<Radio key={a.id} value={a.id}>{a.text}</Radio>
					))}
				</VStack>
			</RadioGroup>
			<Button onClick={onAddAnswer}>Next</Button>
		</VStack>
	);
};
