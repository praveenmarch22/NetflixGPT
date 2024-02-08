export const validateCredentials = (email, password) => {
  const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const passwordCheck =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailCheck) return "Email id is not valid.";
  if (!passwordCheck) return "Password is not valid.";

  return null;
};
