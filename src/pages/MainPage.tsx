import {Grid, GridItem} from '@chakra-ui/react';
import React from 'react';
import {Outlet} from 'react-router-dom';
import {Sidebar} from '../components/layout/Sidebar';
export const MainPage = () => (
	<Grid maxH='100vh' overflow='clip' gridTemplateRows={'1fr'} w='100vw' h='100vh' gridTemplateColumns={'2fr 10fr'}>
		<GridItem h='full'>
			<Sidebar w='full' justifyContent='space-between' />
		</GridItem>
		<GridItem w='full' h='full' overflowY='hidden' maxH='full'>
			<Outlet></Outlet>
		</GridItem>
	</Grid>
);
