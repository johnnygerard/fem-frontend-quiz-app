export const indexToLetter = (index: number): string => {
  if (index < 0 || index > 25)
    throw new Error("Index must be between 0 and 25");
  return String.fromCharCode(65 + index);
};
