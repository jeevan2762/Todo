import { Box } from '@mui/material';
import React from 'react';
import Container from './Container';

const Todo = (context) => {
	const { state: { todoList }} = context;

	return (
		<Box className="container">
			{todoList.map((todo, key) =>
				<Container
					key={ key }
					{ ...{ ...context, data: { todo }} }
				/>)}
		</Box>);
};

export default Todo;
