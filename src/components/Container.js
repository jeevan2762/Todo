import { Box } from '@mui/material';
import React from 'react';
import DisplayTodo from './DisplayTodo';

const Container = (context) =>
	<Box className="container">
		<DisplayTodo { ...context }/>
	</Box>;

export default Container;
