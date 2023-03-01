import { Box, Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return <Box className="toggleAll">
		<Checkbox
			className="saCheckBox"
			checked={ TodoManager.isAllTodoSelected(context) }
			onClick={ ({ target: { checked }}) => setState({
				...state,
				todoList: TodoManager.toggleAll({ ...{ ...context,
					data: checked }}),
			}) }
		/>ToggleAll
	</Box>;
};

export default SelectAll;
