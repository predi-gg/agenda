/**
 * Creates a delay using Promise
 * @param ms Time to wait in milliseconds
 * @returns Promise that resolves after the specified delay
 */
export const delay = (ms: number): Promise<void> => {
	return new Promise(resolve => setTimeout(resolve, ms));
};
