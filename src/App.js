import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Input from './components/Input';
import ActionButton from './components/ActionButton';
import Container from './components/Container';
import TodoManager from './services/TodoManager';
import { peek } from '@laufire/utils/debug';

const initialState = (context) => ({
	initialText: '',
	todoList: [],
	editTodo: '',
	filter: 'all',
	tasks: TodoManager.getTask(context),
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };
	const { state: { todoList, tasks }} = extendedContext;

	peek(tasks);
	return <Box className="App">
		<Input { ...extendedContext }/>
		<ActionButton { ...extendedContext }/>
		{Boolean(todoList.length) && <Container { ...extendedContext }/>}
	</Box>;
};

export default App;
