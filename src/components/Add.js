import { Button } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { rndString } from '@laufire/utils/random';

const Add = (context) => {
	const { state: { initialText, list }, config: { idLength }} = context;
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
				list: [...list, { name: initialText,
					id: rndString(idLength) }],
				initialText: '',
			}) }
		>
			Add
		</Button>);
};

export default Add;
