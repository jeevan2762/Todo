import { Box, Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return <Box className="saCheckBox">
		<Checkbox
			onChange={ ({ target: { checked }}) => setState({
				...state,
				list: TodoManager.selectAll({ ...{ ...context,
					value: checked }}),
			}) }
		/>SelectAll
	</Box>;
};

export default SelectAll;
