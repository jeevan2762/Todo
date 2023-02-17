import { rndString } from '@laufire/utils/random';

const removeTodo = (context) => {
	const { state: { list }, data: { todo: { id }}} = context;

	return list.filter((todo) => todo.id !== id);
};

const getNameAndId = (context) => {
	const { state: { initialText }, config: { idLength }} = context;

	return { id: rndString(idLength),
		name: initialText,
		isChecked: false };
};

const TodoManager = {
	removeTodo,
	getNameAndId,
};

export default TodoManager;
