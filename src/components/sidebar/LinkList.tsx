import React from 'react';
import type {ListProps} from '@chakra-ui/react';
import {HStack} from '@chakra-ui/react';
import {IconButton} from '@chakra-ui/react';
import {Button, Link as ChakraLink, Text} from '@chakra-ui/react';
import {forwardRef, List, ListItem} from '@chakra-ui/react';
import {Link, useNavigate} from 'react-router-dom';
import {LinkListItem} from './LinkListItem';
import {FiSettings} from 'react-icons/fi';
import {clearTokens} from '../../utils';

export const LinkList = forwardRef<ListProps, 'ul'>((props, ref) => {
	const navigate = useNavigate();
	const logout = () => {
		clearTokens();
		navigate('/login');
	};

	return (
		<List {...props} ref={ref} w='full' spacing={2}>
			<ListItem w='full' mb={5}>
				<Button w='full' variant='solid' onClick={logout}>
					<Text pl='1' fontWeight='normal'>
						Logout
					</Text>
				</Button>
			</ListItem>
			<LinkListItem text='Explore' link='/explore' />
			<LinkListItem text='Create quiz' link='/create' />
			<LinkListItem text='Your results' link='/results' />
			<LinkListItem text='Your quizes' link='/created' />
		</List>
	);
});
