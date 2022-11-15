import React from 'react';
import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, HStack, Input, InputGroup, InputLeftAddon, List, ListItem, Select} from '@chakra-ui/react';
import {useState} from 'react';
import type {AnswerBuilder} from '../../types/questions.type';
import {Answer} from './Answer';
import {v4 as uuid} from 'uuid';

export type QuestionProps = {
	title: string;
	setTitle: (_: string) => void;
	answers: AnswerBuilder[];
	setAnswers: (_: (prev: AnswerBuilder[]) => AnswerBuilder[]) => void;
	addAnswer: () => void;
	setSelectedAnswer: (_: string) => void;
	removeQuestion: () => void;
};

export const Question: React.FC<QuestionProps> = ({title, addAnswer, setTitle, answers, setAnswers, setSelectedAnswer, removeQuestion}) => {
	const [text, setText] = useState(title);
	const [select, setSelect] = useState('');

	const removeAnswer = (answerIndex: number) => () => {
		setAnswers(prev => prev.filter((_, i) => i !== answerIndex));
	};

	const changeAnswerTitle = (answerIdx: number) => (newText: string) => {
		setAnswers(prev => prev.map((a, i) => i === answerIdx ? {...a, text: newText} : a));
	};

	return (
		<AccordionItem w='full'>
			<h2>
				<AccordionButton>
					<Box flex='1' textAlign='left'>
						{title}
					</Box>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel pb={4}>
					<Input value={text} onChange={e => {
						setText(e.target.value);
					}}
					onBlur={() => {
						setTitle(text);
					}}
					/>
					<List spacing={3}>
						{answers.map((a, idx) => (
							<ListItem key={uuid()} >
								<Answer title={a.text} setTitle={changeAnswerTitle(idx)} remove={removeAnswer(idx)} />
							</ListItem>
						))}
						{answers.length > 0 && (
							<ListItem>
								<InputGroup>
									<InputLeftAddon>Valid answer</InputLeftAddon>
									<Select onChange={function (e) {
										setSelectedAnswer(e.target.value);
									}}
									value={answers.find(a => a.valid)?.text ?? undefined}
									placeholder='Select Valid Answer'
									>
										{answers.map(a => (
											<option value={a.text} key={uuid()}>{a.text}</option>
										))}
									</Select>
								</InputGroup>
							</ListItem>

						)}
						<HStack w='full' spacing={2} mt={5} alignItems='center'>

							<Button w='full' onClick={addAnswer}>Add Answer</Button>
							<Button w='full' onClick={removeQuestion}>Remove question</Button>
						</HStack>
					</List>
				</AccordionPanel>
			</h2>
		</AccordionItem>
	);
};
