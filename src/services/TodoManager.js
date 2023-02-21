import { rndString } from '@laufire/utils/random';

const removeTodo = ({ state: { list }, data: { todo: { id }}}) =>
	list.filter((todo) => todo.id !== id);

const getTodo = (context) => {
	const { state: { initialText }, config: { idLength }} = context;

	return { id: rndString(idLength),
		name: initialText,
		isChecked: false };
};

const updateName = (context) => {
	const { state: { initialText, list, editTodo: todo }} = context;

	return list.map((todoItem) => (todoItem.id === todo.id
		? { ...todoItem, name: initialText }
		: todoItem));
};

const clearSelected = (context) => {
	const { state: { list }} = context;

	return list.filter((todo) => !todo.isChecked);
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

const toggleAll = (context) => {
	const { state: { list }, data } = context;

	return list.map((todo) => ({ ...todo, isChecked: data }));
};

const TodoManager = {
	removeTodo,
	getTodo,
	updateName,
	clearSelected,
	updateIsChecked,
	toggleAll,
};

export default TodoManager;
