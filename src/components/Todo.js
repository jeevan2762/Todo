import { Box } from '@mui/material';
import React from 'react';
import Container from './Container';

const Todo = (context) => {
	const { state: { list }} = context;

	return (
		<Box className="container">
			{list.map((todo, key) =>
				<Container
					key={ key }
					{ ...{ ...context, data: { todo }} }
				/>)}
		</Box>);
};

export default Todo;
