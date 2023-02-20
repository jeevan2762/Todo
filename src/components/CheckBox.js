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
				// eslint-disable-next-line max-len
				list: TodoManager.updateIsChecked({ ...{ ...context, data: { todo }}}),
			}) }
		/>
	</Box>;
};

export default CheckBox;
