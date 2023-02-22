import { Button } from '@mui/material';
import { React } from 'react';

const All = (context) => {
	const { state, setState } = context;

	return (
		<Button
			variant="text"
			onClick={ () => setState({
				...state,
				filter: 'all',
			}) }
		>All</Button>);
};

export default All;
