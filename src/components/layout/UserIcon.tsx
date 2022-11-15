import React, {useEffect, useState} from 'react';
import {Avatar, IconButton} from '@chakra-ui/react';
import type {MeQuery} from '../../graphql/gql/graphql';

export type UserIconProps = {
	user: MeQuery['me'];
	loading: boolean;
};

export const UserIcon: React.FC<UserIconProps> = ({user, loading}) => {
	const [name, setName] = useState('');

	useEffect(() => {
		setName(`${user.firstname!} ${user.lastname!}`);
	}, [user]);

	return (
		<IconButton aria-label='User settings' isLoading={loading}>
			<Avatar size='sm' bgColor='purple.400' name={name} />
		</IconButton>
	);
};
