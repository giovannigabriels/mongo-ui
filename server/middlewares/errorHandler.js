const errorHandler = (error, req, res, next) => {
  let code = 500;
  let message = `Internal server error`;
  if (error.name == "email_missing") {
    code = 400;
    message = `email is required`;
  } else if (error.name == "addr_missing") {
    code = 400;
    message = "address is required";
  }
  res.status(code).json({ message });
};

module.exports = errorHandler;
