import { DEFAULT_ERROR_MSG, firebaseErrors } from "@/constants/firebaseErrors";

export const getErrorMessage = (code: string) => {
  return (
    firebaseErrors.find((error) => error.code === code)?.message ??
    DEFAULT_ERROR_MSG
  );
};
