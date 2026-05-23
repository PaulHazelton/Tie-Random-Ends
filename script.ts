const initialNumStrings = getInput();

console.log(`Initial strings: ${initialNumStrings}\n`);

// for (let i = 0; i < 20; i++) {
// 	const x = getRandomInt(3);
// 	const y = getRandomIntExclude(3, x);
// 	console.log(`${x}, ${y}`);
// }

let loops = 0;

for (let i = initialNumStrings * 2; i >= 2; i -= 2) {
	
	const x = getRandomInt(i);
	const y = getRandomIntExclude(i, x);
	
	const loopMade = Math.trunc(x / 2) == Math.trunc(y / 2);

	if (loopMade)
		loops++;

	// console.log(`${i.toString().padEnd(2)} ends left, chose [${x},${y}]${loopMade ? " LOOP!" : ""}`);
}

console.log(`Loops made: ${loops}`);

function getInput(): number {
	const input = Deno.args[0] ?? "0";

	try {
		const result = Number.parseInt(input);

		if (Number.isNaN(result)) {
			console.error(`Bad input "${input}"`);	
			return 0;
		}
		return result;
	} catch {
		console.error(`Bad input ${input}`);
		return 0;
	}
}

function getRandomInt(max: number): number {
	return Math.floor(Math.random() * max);
}

function getRandomIntExclude(max: number, excludeThis: number): number {
	const result = getRandomInt(max - 1);

	if (result >= excludeThis)
		return result + 1;
	else
		return result;
}