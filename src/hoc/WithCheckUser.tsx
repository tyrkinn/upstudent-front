import React from 'react';
import {useToast} from '@chakra-ui/react';
import {Navigate} from 'react-router-dom';
import type {User} from '../types/user.type';
import {useAtomValue} from 'jotai';
import {userAtom} from '../store';

export type WithCheckUserProps = {
	children: React.ReactElement;
};

export const WithCheckUser: React.FC<WithCheckUserProps> = ({children}) => {
	const toast = useToast({position: 'top-right', isClosable: true});
	const user = useAtomValue(userAtom);

	if (!user) {
		toast({status: 'error', title: 'Auhorize to access this page'});
		return (
			<Navigate to='login'></Navigate>
		);
	}

	return children;
};
