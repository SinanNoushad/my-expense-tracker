const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let foundUser = null;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        if (user.email === email && user.password === password) {
          foundUser = user;
          break;
        }
      }
      if (foundUser) {
        localStorage.setItem("LoginedUser", JSON.stringify(foundUser));
        resolve({
          message: "login successful",
          token: "fake-123-token",
          user: { email: foundUser.email, name: foundUser.username },
        });
      } else {
        reject(new Error("Invalid Credentials. Please Try Again"));
      }
    }, 1500);
  });
};

const registerUser = async (username, email, password, confirmPassword) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password != confirmPassword) {
        reject(new Error("Password do not match."));
        return;
      }
      const user = {
        username: username,
        email: email,
        password: password,
      };
      localStorage.setItem(`${username}`, JSON.stringify(user));
      resolve({
        message: "Registeration Successful",
        user: { email: email },
      });
    }, 1500);
  });
};
export { loginUser, registerUser };
