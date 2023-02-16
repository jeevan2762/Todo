import { Button } from '@mui/material';
import React from 'react';

const Add = (context) => {
	const { state: { initialText, list }, state, setState } = context;

	return (
		<Button
			className="addButton"
			variant="outlined"
			size="small"
			onClick={ () => setState({
				...state,
				list: [...list, { name: initialText }],
			}) }
		>
			Add
		</Button>);
};

export default Add;
