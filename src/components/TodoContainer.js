import { Box } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';
import Container from './Container';

const TodoContainer = (context) => (TodoManager.getLength(context)
	? <Box/>
	: <Container { ...context }/>);

export default TodoContainer;
