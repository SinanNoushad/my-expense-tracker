const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@gmail.com" && password === "test") {
        resolve({
          message: "Login Sucessful!",
          token: "fake-123-token",
          user: { email: email, name: "Test User" },
        });
      } else {
        reject(new Error("Invalid Credetials.Please Try Again"));
      }
    }, 1500);
  });
};

const registerUser = async (email, password, confirmPassword) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password != confirmPassword) {
        reject(new Error("Password do not match."));
        return;
      }
      resolve({
        message: "Registeration Successful",
        user: { email: email },
      });
    }, 1500);
  });
};
export { loginUser, registerUser };
