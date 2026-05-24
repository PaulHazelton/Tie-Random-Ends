await main();

async function main() {
	const maxNumStrings = getInputNumber(0);
	const iterations = getInputNumber(1);

	console.log(`Max number of strings: ${maxNumStrings}`);
	console.log(`Iterations: ${iterations}\n`);

	const data: string[] = new Array<string>(maxNumStrings);

	for (let i = 1; i <= maxNumStrings; i++) {

		const avg = runAndAverage(i, iterations);

		console.log(`Strings: ${String(i).padStart(3)}, Avg: ${avg.toFixed(3)}`);

		data[i-1] = `${i}, ${avg}`;
	}

	const text = data.join("\n");

	await Deno.writeTextFile("data.csv", text);

	console.log("Generated data.csv");
}

function runAndAverage(numStrings: number, iterations: number): number {

	const totals: number[] = new Array(numStrings + 1).fill(0);

	for (let i = 0; i < iterations; i++) {

		const loopCount = simulateCountLoops(numStrings);
		totals[loopCount]++;
	}

	return calculateAverage(totals, iterations);
}

function simulateCountLoops(numStrings: number): number {

	let loops = 0;

	for (let i = numStrings * 2; i >= 2; i -= 2) {

		const x = getRandomInt(i);
		const y = getRandomIntExclude(i, x);

		const loopMade = Math.trunc(x / 2) == Math.trunc(y / 2);

		if (loopMade)
			loops++;
	}

	return loops;
}

function calculateAverage(loopTotals: number[], iterations: number): number {

	let average = 0;

	for (let i = 0; i < loopTotals.length; i++) {
		average += i * (loopTotals[i] / iterations);
	}

	return average;
}

function getInputNumber(index: number): number {
	const input = Deno.args[index] ?? "0";

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

// function debugThing() {
// 	for (let i = 0; i < 20; i++) {
// 		const x = getRandomInt(3);
// 		const y = getRandomIntExclude(3, x);
// 		console.log(`${x}, ${y}`);
// 	}
// }

// function displaySummary(loopTotals: number[], iterations: number) {
// 	loopTotals.forEach((value, index) => {
// 		if (value > 0) {

// 			console.log(`[${String(index).padStart(2)}] = ${String(value).padStart(Math.log2(iterations) + 1)}`);
// 		}
// 	})
// }