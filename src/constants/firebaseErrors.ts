export const firebaseErrors = [
  {
    code: "auth/email-already-in-use",
    message: "Email is already used!",
  },
];

export const getErrorMessage = (code: string) => {
  return (
    firebaseErrors.find((error) => error.code === code)?.message ??
    "An error has occured!"
  );
};
