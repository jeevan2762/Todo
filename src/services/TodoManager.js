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

const updateName = (context) => {
	const { state: { initialText, list, editTodo: todo }} = context;

	return list.map((ele) => (ele.id === todo.id
		? { ...ele, name: initialText }
		: ele));
};

const TodoManager = {
	removeTodo,
	getNameAndId,
	updateName,
};

export default TodoManager;
