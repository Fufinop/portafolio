/**
 * The function converts a string to kebab case format.
 * @param {string} str - The input string that needs to be converted to kebab case.
 */
export const kebabCase = (str: string) =>
	str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();

/**
 * The function `kebabArray` takes an array of any type and returns a new array with each item
 * converted to kebab case.
 * @param {any[]} arr - an array of any type of values that needs to be converted to kebab case.
 */
export const kebabArray = (arr: any[]) => arr.map(item => kebabCase(item));

/**
 * This function generates a random number text and updates it in intervals until a certain count is
 * reached.
 * @param {string} finalNum - a string representing the final number that the function should generate
 * randomly and display.
 * @param setNumber - `setNumber` is a function that takes in a string argument and updates the state
 * of a component with that string value. It is likely a state updater function passed down as a prop
 * from a parent component. In this case, it is used to update the value of `newNum` with a
 */
export const randomNumberText = (
	finalNum: string,
	setNumber: (arg0: string) => void,
) => {
	let count = 0;
	let newNum = '';
	const interval = setInterval(() => {
		count++;
		for (let i = 0; i < finalNum.length; i++) {
			newNum += Math.floor(Math.random() * 10);
		}
		setNumber(newNum);
		newNum = '';
		if (count === 20) {
			clearInterval(interval);

			setNumber('404');
		}
	}, 80);
};
