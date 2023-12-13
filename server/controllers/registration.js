const EmployeeModel = require("../models/user");

const register = async (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
};

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   EmployeeModel.findOne({ email: email }).then((user) => {
//     if (user) {
//       if (user.password === password) {
//         return res.json("success");
//       } else {
//         return res.json("password is incorrect");
//       }
//     } else {
//       console.log("user not found");
//     }
//   });
// };
// module.exports = register;
