import React from 'react';
import TodoManager from '../services/TodoManager';
import Container from './Container';

const TodoContainer = (context) => Boolean(TodoManager.getLength(context))
	&& <Container { ...context }/>;

export default TodoContainer;
