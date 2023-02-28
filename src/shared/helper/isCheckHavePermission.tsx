export const isCheckHavePermission = (userTypeCheck: number[], userType: number): boolean => {
  return userTypeCheck.some(per => per === userType);
};
