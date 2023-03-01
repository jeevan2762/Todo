import { Button } from '@mui/material';
import { React } from 'react';

const Filters = (context) => {
	const { state, setState, data } = context;

	return (
		<Button
			className="filterButtons"
			variant="text"
			onClick={ () => setState({
				...state,
				filter: `${ data }`,
			}) }
		>{data}</Button>);
};

export default Filters;
