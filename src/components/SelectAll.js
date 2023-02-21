import { Box, Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return <Box className="saCheckBox">
		<Checkbox
			onClick={ ({ target: { checked }}) => setState({
				...state,
				todoList: TodoManager.toggleAll({ ...{ ...context,
					data: checked }}),
			}) }
		/>SelectAll
	</Box>;
};

export default SelectAll;
