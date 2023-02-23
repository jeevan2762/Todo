import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Input from './components/Input';
import ActionButton from './components/ActionButton';
import Container from './components/Container';

const initialState = {
	initialText: '',
	todoList: [],
	editTodo: '',
	filter: 'all',
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };
	const { state: { todoList }} = extendedContext;

	return <Box className="App">
		<Input { ...extendedContext }/>
		<ActionButton { ...extendedContext }/>
		{Boolean(todoList.length) && <Container { ...extendedContext }/>}
	</Box>;
};

export default App;
