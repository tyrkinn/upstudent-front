import {useState} from 'react';
import React from 'react';
import {HStack, IconButton, Input, VStack} from '@chakra-ui/react';
import {FiTrash} from 'react-icons/fi';

export type AnswerProps = {
	title: string;
	remove: () => void;
	setTitle: (_: string) => void;
};

export const Answer: React.FC<AnswerProps> = ({title, remove, setTitle}) => {
	const [text, setText] = useState(title);

	return (
		<HStack py={5} px={3} justifyContent='space-between' w='full'>
			<Input value={text}
				onChange={e => {
					setText(e.target.value);
				}}
				onBlur={e => {
					e.preventDefault();
					setTitle(text);
				}} />
			<IconButton aria-label='Delete answer' icon={<FiTrash />} onClick={remove} />
		</HStack>
	);
};
