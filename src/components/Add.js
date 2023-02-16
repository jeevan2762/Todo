import { Button } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Add = (context) => {
	const { state: { initialText, list }, state, setState } = context;

	return (
		<Button
			className="addButton"
			variant="outlined"
			size="small"
			startIcon={ <AddOutlinedIcon/> }
			onClick={ () => setState({
				...state,
				list: [...list, { name: initialText }],
			}) }
		>
			Add
		</Button>);
};

export default Add;
