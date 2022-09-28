import express from "express";
import validateUser from "./routes/validateUser.js";
import sanitizeUser from "./routes/sanitizeUser.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//http://localhost:3001/validateUser
app.use("/validateUser", validateUser);

//http://localhost:3001//sanitizeUser
app.use("/sanitizeUser", sanitizeUser);

app.use((req, res, next) => {
  const error = new Error("Hey! Page Not Found!");
  error.status = 404;
  next(error);
});

//Global error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => console.log(`Server listening on Port ${port}`));
