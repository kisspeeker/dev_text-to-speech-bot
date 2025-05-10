/**
 * Возвращает случайное значение из объекта
 * @param obj — объект «ключ → значение»
 */
export const getRandomValue = <T>(obj: Record<string, T>): T => {
  const values = Object.values(obj);
  const idx = Math.floor(Math.random() * values.length);

  return values[idx];
};
