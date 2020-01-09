import { addNewTask, updateTask } from './server';

(async function myFunc () {
	await addNewTask({
		name : 'My task asile',
		id   : '12346'
	});

	await updateTask({
		name : 'My task Konkorezis AHA!!!',
		id   : '12346'
	});
})();
