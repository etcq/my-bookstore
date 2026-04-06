export const isNumericParamValue = (paramValue: string) => {
  const valueToNumber = Number(paramValue);
  return Number.isFinite(valueToNumber) ? valueToNumber : 0;
};
