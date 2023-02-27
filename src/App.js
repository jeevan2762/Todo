import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Input from './components/Input';
import ActionButton from './components/ActionButton';
import Container from './components/Container';
import { peek } from '@laufire/utils/debug';
import TaskContainer from './components/Tasks/TaskContainer';
import Headings from './components/Headings';
import TaskManager from './services/TaskManager';

const initialState = (context) => ({
	initialText: '',
	todoList: [],
	editTodo: '',
	filter: 'all',
	tasks: TaskManager.getTask(context),
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };
	const { state: { todoList, tasks }} = extendedContext;

	peek(tasks);
	return <Box className="App">
		<Headings/>
		<Input { ...extendedContext }/>
		<ActionButton { ...extendedContext }/>
		{Boolean(todoList.length) && <Container { ...extendedContext }/>}
		<TaskContainer { ...extendedContext }/>
	</Box>;
};

export default App;
