import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@user.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Naruto Uzumaki",
    email: "naruto@uzumaki.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sasuke Uchiha",
    email: "sasuke@uchiha.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
