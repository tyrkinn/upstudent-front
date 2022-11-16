import React, {useEffect, useState} from 'react';
import {Accordion, Button, Container, Heading, HStack, Input, InputGroup, InputLeftAddon, useToast, VStack} from '@chakra-ui/react';
import {Question} from '../components/create-quiz/Question';
import {v4 as uuid} from 'uuid';
import type {AnswerBuilder, QuestionBuilder} from '../types/questions.type';
import {useMutation, useQuery} from '@apollo/client';
import {CREATE_QUIZ} from '../graphql/mutations';
import {GET_ALL_QUIZES} from '../graphql/queries';
import {useNavigate} from 'react-router-dom';

export const CreateQuiz = () => {
	const [title, setTitle] = useState('');
	const [questions, setQuestions] = useState<QuestionBuilder[]>([]);
	const toast = useToast({position: 'top-right', isClosable: true});
	const [sendQuiz] = useMutation(CREATE_QUIZ);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const setQuestionTitle = (questionIdx: number) => (newTitle: string) => {
		setQuestions(prev => prev.map((q, idx) => idx === questionIdx ? {...q, text: newTitle} : q));
	};

	const setAnswers = (questionIdx: number) => (answersMutation: (_: AnswerBuilder[]) => AnswerBuilder[]) => {
		setQuestions(prev => prev.map((q, idx) => idx === questionIdx
			? {...q, answers: answersMutation(q.answers)}
			: q));
	};

	const addAnswer = (questionIdx: number) => () => {
		setQuestions(prev => prev.map((q, idx) => idx === questionIdx
			? {...q, answers: [...q.answers, {text: 'New answer', valid: false}]}
			: q));
	};

	const setSelectedAnswer = (questionIdx: number) => (newSelectedAnswer: string) => {
		setQuestions(prev => prev.map((q, idx) => idx === questionIdx
			? {...q, answers: q.answers.map(a => a.text === newSelectedAnswer ? {...a, valid: true} : {...a, valid: false})}
			: q));
	};

	const addQuestion = () => {
		setQuestions(prev => [...prev, {
			text: 'New question', answers: [],
		}]);
	};

	const removeQuestion = (questionIdx: number) => () => {
		setQuestions(prev => prev.filter((_, idx) => idx !== questionIdx));
	};

	const saveQuiz = async () => {
		setLoading(true);

		if (questions.length === 0) {
			toast({status: 'error', title: 'You should have at least one question in your quiz'});
			setLoading(false);
			return;
		}

		if (title.trim().length === 0) {
			toast({status: 'error', title: 'You should give name to your quiz'});
			setLoading(false);
			return;
		}

		for (const q of questions) {
			const validCount = q.answers.filter(a => a.valid).length;
			if (validCount === 0) {
				toast({status: 'error', title: `Question ${q.text} has no selected valid answer`});
				setLoading(false);
				return;
			}

			if (validCount > 1) {
				toast({status: 'error', title: `Question ${q.text} has repeated answers`});
				setLoading(false);
				return;
			}
		}

		const res = await sendQuiz({variables: {data: {questions, title}}});

		if (res.errors) {
			if (res.errors.length > 0) {
				for (const error of res.errors) {
					toast({status: 'error', title: error.message});
				}

				setLoading(false);
				return;
			}
		}

		const {refetch} = useQuery(GET_ALL_QUIZES);
		await refetch();

		toast({status: 'success', title: 'Successfully created quiz'});

		navigate('/explore');

		setLoading(false);
	};

	return (
		<VStack w='full' h='full' bgColor='whiteAlpha.200' spacing={3}>
			<HStack w='full' bgColor='whiteAlpha.100' py={5} rounded='lg' justify='center'>
				<Heading as='h2' size='lg'>Create quiz</Heading>
			</HStack>
			<Container maxW='container.lg' h='80%' pt={5} overflowY='scroll' rounded='lg' bgColor='blackAlpha.300'>
				<InputGroup>
					<InputLeftAddon>Quiz title</InputLeftAddon>
					<Input value={title} onChange={e => {
						setTitle(e.target.value);
					}}
					placeholder='New quiz title...'
					/>
				</InputGroup>
				<VStack w='full' mt={10}>
					<Accordion allowToggle w='70%' rounded='xl' borderX='1px' borderColor='whiteAlpha.300'>
						{questions.map((q, idx) => (
							<Question
								key={uuid()}
								title={q.text}
								setTitle={setQuestionTitle(idx)}
								setAnswers={setAnswers(idx)}
								answers={q.answers}
								addAnswer={addAnswer(idx)}
								setSelectedAnswer={setSelectedAnswer(idx)}
								removeQuestion={removeQuestion(idx)}
							/>
						))}
					</Accordion>
					<HStack w='full' justifyContent='center'>
						<Button onClick={addQuestion} w='50%'>Add question</Button>
					</HStack>
				</VStack>
			</Container>
			<Button w='60%' isLoading={loading} onClick={saveQuiz}>Save quiz</Button>

		</VStack>
	);
};
