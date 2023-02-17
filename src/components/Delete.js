import { Button } from '@mui/material';
import React from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const removed = (context) => {
	const { state: { list }, data: ele } = context;

	return list.filter((todo) => todo.id !== ele.id);
};

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			variant="text"
			size="small"
			color="error"
			startIcon={ <DeleteTwoToneIcon/> }
			onClick={ () => setState({
				...state,
				list: removed(context),
			}) }
		/>);
};

export default Delete;
