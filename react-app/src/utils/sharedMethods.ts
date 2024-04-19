export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function getFloatValue(value: string): number {
	const result = isNaN(value as any)? value.replaceAll(/[^0-9,]/g, '').replace(',', '.'): value;
	const floatResult = parseFloat(result);
	if (isNaN(floatResult)) return 0;
	else return floatResult;
}