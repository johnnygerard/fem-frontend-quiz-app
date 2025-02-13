/**
 * Randomize the order of array elements.
 *
 * This function uses the Fisher-Yates algorithm to shuffle the array in place.
 * @param elements - The array to shuffle.
 * @returns A randomized array.
 */
export const shuffleArray = <T>(elements: readonly T[]): readonly T[] => {
  const array = [...elements];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
