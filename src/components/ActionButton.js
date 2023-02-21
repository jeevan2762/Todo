import React from 'react';
import TodoManager from '../services/TodoManager';
import Add from './Add';
import Update from './Update';

const ActionButton = (context) => (TodoManager.getAction(context)
	? <Add { ...context }/>
	: <Update { ...context }/>);

export default ActionButton;
