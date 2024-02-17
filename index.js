const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// };

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);

  console.log(hash);
};

const login = async (pw, hashPassword) => {
  const result = await bcrypt.compare(pw, hashPassword);
  if (result) {
    console.log("ログイン成功!!!!!!!!");
  } else {
    console.log("ログイン失敗、、、、、");
  }
};

// hashPassword("123456");
login("123456", "$2b$12$PenODWHNMRJZ4P8wSGZQluSjOt8nLRrxmX0vi0vy9p/5kL8QGrJu2");
