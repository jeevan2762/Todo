import { Button } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Add = (context) => {
	const { state: { initialText, list },
		state, setState } = context;

	return (
		<Button
			className="addButton"
			variant="outlined"
			disabled={ initialText === '' }
			size="small"
			startIcon={ <AddOutlinedIcon/> }
			onClick={ () => setState({
				...state,
				list: [...list, { name: initialText }],
				initialText: '',
			}) }
		>
			Add
		</Button>);
};

export default Add;
