import { Button } from '@mui/material';
import React from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { peek } from '@laufire/utils/debug';

const removed = (context) => {
	const { state: { list }, data: ele } = context;

	peek(ele);
	return list.filter((todo) => peek(todo.id) !== ele.id);
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
