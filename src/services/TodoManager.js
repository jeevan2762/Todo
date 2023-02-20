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

const clearSelected = (context) => {
	const { state: { list }} = context;

	return list.filter((todo) => todo.isChecked === false);
};

const updateIsChecked = (context) => {
	const { state: { list }, data: { todo }} = context;

	return list.map((data) => {
		const { isChecked } = data;

		return data.id === todo.id
			? { ...data, isChecked: !isChecked }
			: data;
	});
};

const TodoManager = {
	removeTodo,
	getNameAndId,
	updateName,
	clearSelected,
	updateIsChecked,
};

export default TodoManager;
