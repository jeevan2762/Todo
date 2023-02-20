import { Box } from '@mui/material';
import React from 'react';
import CheckBox from './CheckBox';
import Delete from './Delete';
import Display from './Display';

const DisplayTodo = (context) => {
	const { data: { todo }} = context;

	return <Box className="displayTodo">
		<CheckBox { ...{ ...context, data: { todo }} }/>
		<Display { ...{ ...context, data: { todo }} }/>
		<Delete { ...{ ...context, data: { todo }} }/>
	</Box>;
};

export default DisplayTodo;
