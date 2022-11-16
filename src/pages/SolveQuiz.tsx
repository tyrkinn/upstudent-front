import {useMutation, useQuery} from '@apollo/client';
import {Heading, HStack, Spinner, useToast, VStack} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {SolveQuestion} from '../components/solve-quiz/SolveQuestion';
import type {GetQuizQuery} from '../graphql/gql/graphql';
import {CREATE_RESULT} from '../graphql/mutations';
import {GET_QUIZ} from '../graphql/queries';

export const SolveQuiz = () => {
	const {quizId} = useParams();
	const {data, loading, error} = useQuery(GET_QUIZ, {variables: {id: quizId!}});
	const toast = useToast({position: 'top-right', isClosable: true});
	const [questions, setQuestions] = useState<GetQuizQuery['quiz']['questions']>([]);
	const [questionIdx, setQuestionIdx] = useState<number>(0);
	const navigate = useNavigate();
	const [answers, setAnswers] = useState<string[]>([]);
	const [sendResult, {loading: resLoading, error: resError}] = useMutation(CREATE_RESULT);

	const addAnswer = (newAnswer: string) => {
		setAnswers(prev => [...prev, newAnswer]);
	};

	const createResult = async () => {
		const res = await sendResult({variables: {data: {quizId: quizId!, answerIds: answers}}});
		if (resError) {
			toast({status: 'error', title: resError.message});
			console.log(resError);
			navigate('/explore');
		}

		if (res.errors) {
			// eslint-disable-next-line prefer-const
			for (let exception of res.errors) {
				toast({status: 'error', title: exception.message});
			}

			navigate('/explore');
		}

		toast({status: 'success', title: 'Good job! See your results'});
		navigate('/results');
	};

	const nextQuestion = async () => {
		if (questionIdx >= questions.length - 1) {
			console.log('sent');
			await createResult();
		} else {
			console.log('inc', questionIdx);
			setQuestionIdx(prev => prev + 1);
		}
	};

	useEffect(() => {
		if (error) {
			toast({status: 'error', title: error.message});
			console.log(error);
			console.log(quizId);
			navigate('/explore');
		}
	}, [error]);

	useEffect(() => {
		if (data?.quiz) {
			setQuestions(data.quiz.questions);
		}
	}, [data]);

	if (!data?.quiz) {
		return (
			<VStack h='full' w='full'>
				<Spinner />
			</VStack>
		);
	}

	if (loading || questions.length === 0) {
		return (
			<VStack h='full' w='full'>
				<HStack w='full' mb={5} bgColor='whiteAlpha.100' py={5} rounded='lg' justify='center'>
					<Heading as='h2' size='lg'>Quiz {data.quiz.title}</Heading>
				</HStack>
				<Spinner />
			</VStack>
		);
	}

	return (
		<VStack h='full' w='full'>
			<HStack w='full' mb={5} bgColor='whiteAlpha.100' py={5} rounded='lg' justify='center'>
				<Heading as='h2' size='lg'>Quiz {data.quiz.title}</Heading>
			</HStack>
			<VStack w='full' h='full' justifyContent='center' alignItems='center'>
				<SolveQuestion question={questions[questionIdx]} addAnswer={addAnswer} nextQuestion={nextQuestion} />
			</VStack>
		</VStack>
	);
};
