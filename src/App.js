import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Input from './components/Input';
import Container from './components/Container';

const initialState = {
	initialText: '',
	list: [],
	edit: [],
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <Box className="App">
		<Input { ...extendedContext }/>
		<Container { ...extendedContext }/>
	</Box>;
};

export default App;
