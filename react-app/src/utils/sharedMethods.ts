// Promise method for mocking loading times
export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Method to get a float value from a formatted number string
export function getFloatValue(value: string): number {
	const result = isNaN(value as any)? value.replaceAll(/[^0-9,]/g, '').replace(',', '.'): value;
	const floatResult = parseFloat(result);
	if (isNaN(floatResult)) return 0;
	else return floatResult;
}