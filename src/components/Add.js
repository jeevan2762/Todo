import { Button } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TodoManager from '../services/TodoManager';

const Add = (context) => {
	const { state: { initialText, list }} = context;
	const {	state, setState } = context;

	return (
		<Button
			className="addButton"
			variant="outlined"
			disabled={ initialText === '' }
			size="small"
			startIcon={ <AddOutlinedIcon/> }
			onClick={ () => setState({
				...state,
				list: [...list, TodoManager.getNameAndId(context)],
				initialText: '',
			}) }
		>
			Add
		</Button>);
};

export default Add;
