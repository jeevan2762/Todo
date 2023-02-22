import React from 'react';
import Container from './Container';

const TodoContainer = (context) => {
	const { state: { todoList }} = context;

	return todoList.length && <Container { ...context }/>;
};

export default TodoContainer;
