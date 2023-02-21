import { Box } from '@mui/material';
import React from 'react';
import DisplayTodo from './DisplayTodo';
import SelectAll from './SelectAll';

const Container = (context) =>
	<Box className="container">
		<SelectAll { ...context }/>
		<DisplayTodo { ...context }/>
	</Box>;

export default Container;
