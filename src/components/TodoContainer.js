import { Box } from '@mui/material';
import React from 'react';
import ActionButton from './ActionButton';
import Container from './Container';
import Input from './Input';

const TodoContainer = (context) => {
	const { state: { todoList }} = context;

	return <Box className="todoContainer">
		<Input { ...context }/>
		<ActionButton { ...context }/>
		{Boolean(todoList.length) && <Container { ...context }/>}
	</Box>;
};

export default TodoContainer;
