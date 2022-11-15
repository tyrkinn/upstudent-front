import {Button, HStack, Input} from '@chakra-ui/react';
import {useAtom} from 'jotai';
import React, {useState} from 'react';
import type {Quiz} from '../../graphql/gql/graphql';
import {searchInputAtom} from '../../store';

export type SearchBarProps = {
	items: Quiz[];
};

export const SearchBar = () => {
	const [input, setInput] = useAtom(searchInputAtom);

	return (
		<HStack w='full' h='full' px={10}>
			<Input w='full' value={input} onChange={e => {
				setInput(e.target.value);
			}} type='search' placeholder='Search quizes...' />
			<Button onClick={() => {
				setInput('');
			}}>Clear</Button>
		</HStack>
	);
};
