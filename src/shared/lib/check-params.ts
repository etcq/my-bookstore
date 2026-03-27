export const checkParams = (param: string | string[] | undefined) => {
  if (!param) {
    return '';
  }
  return typeof param === 'string' ? param : param[0];
};
