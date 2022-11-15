import React from 'react';
import type {ListItemProps} from '@chakra-ui/react';
import {ListItem, Link as ChakraLink, Text, Flex} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export type LinkListItemProps = {
	text: string;
	link: string;
};

export const LinkListItem: React.FC<LinkListItemProps & ListItemProps> = ({text, link, ...props}) => (
	<ListItem {...props} w='full' display='flex' justifyContent='center'>
		<Flex w='full' _hover={{bgColor: 'whiteAlpha.200'}} rounded='md'>
			<Link to={link} style={{width: '100%', height: '100%', padding: '5px 10px '}}>
				<Text w='full' h='full'>{text}</Text>
			</Link>
		</Flex>
	</ListItem>
);
