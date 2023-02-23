import { Box, Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const CheckBox = (context) => {
	const { state, setState, data: { todo }} = context;

	return <Box>
		<Checkbox
			checked={ todo.isChecked }
			size="medium"
			onClick={ () => setState({
				...state,
				todoList: TodoManager.updateIsChecked({ ...context }),
			}) }
		/>
	</Box>;
};

export default CheckBox;
