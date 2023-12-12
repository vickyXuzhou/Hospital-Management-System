const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/registration");
const doctorDRoute = require("./routes/ddetails");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://victory:victory@cluster0.4aerdmt.mongodb.net/HospitalSystem?retryWrites=true&w=majority"
);

// app.post("/register", (req, res) => {
//   EmployeeModel.create(req.body)
//     .then((employees) => res.json(employees))
//     .catch((err) => res.json(err));
// })
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   EmployeeModel.findOne({ email: email })
//   .then((user) => {
//     if (user) {
//       if (user.password === password) {
//         return res.json("success");
//       } else {
//         res.json("the password is incorrect");
//       }
//     } else {
//       res.json("No record exist");
//     }
//   });
// });

app.use("/api/auth", authRoute);
app.use("/api/doctor", doctorDRoute);
app.listen(3001, () => {
  console.log("server is running");
});
