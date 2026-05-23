const initialNumStrings = getInput();

console.log(`Initial strings: ${initialNumStrings}`);


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