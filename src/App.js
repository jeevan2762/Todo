import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Input from './components/Input';

const initialState = {
	initialText: 'jee',
	list: [],
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <Box>
		<Input { ...extendedContext }/>
	</Box>;
};

export default App;
