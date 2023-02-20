import { Box } from '@mui/material';
import React from 'react';
import DisplayTodo from './DisplayTodo';

const Container = (context) => {
	const { state: { list }} = context;

	return list.map((todo, key) =>
		<Box
			key={ key }
			className="container"
		>
			<DisplayTodo { ...{ ...context, data: { todo }} }/>
		</Box>);
};

export default Container;
