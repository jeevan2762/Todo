import { Box } from '@mui/material';
import React from 'react';
import CheckBox from './CheckBox';
import Delete from './Delete';
import Display from './Display';

const DisplayTodo = (context) => {
	const { state: { list }} = context;

	return <Box>
		{list.map((todo, key) =>
			<Box
				key={ key }
				className="displayTodo"
			>
				<CheckBox { ...{ ...context, data: { todo }} }/>
				<Display { ...{ ...context, data: { todo }} }/>
				<Delete { ...{ ...context, data: { todo }} }/>
			</Box>)}
	</Box>;
};

export default DisplayTodo;
