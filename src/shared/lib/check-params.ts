export const checkParams = (
  params: Record<string, string | string[] | undefined>,
  paramName: string,
) => {
  if (paramName in params) {
    return typeof params[paramName] === 'string'
      ? params[paramName]
      : params[paramName]?.[0];
  }
  return null;
};
