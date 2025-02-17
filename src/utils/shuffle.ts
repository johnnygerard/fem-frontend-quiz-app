/**
 * Randomize the order of array elements.
 *
 * This function uses the Fisher-Yates algorithm to shuffle the array in place.
 * @param array - The array to shuffle.
 * @returns The shuffled array.
 */
export const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
