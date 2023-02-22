import { Button } from '@mui/material';
import { React } from 'react';

const Active = (context) => {
	const { state, setState } = context;

	return (
		<Button
			variant="text"
			onClick={ () => setState({
				...state,
				filter: 'active',
			}) }
		>Active</Button>);
};

export default Active;
