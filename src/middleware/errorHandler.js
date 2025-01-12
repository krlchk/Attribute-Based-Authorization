const errorHandler = (error, req, res, next) => {
  console.log(error.stack);
  res.status(500).json({
    status: 500,
    message: "Internal server error",
    error: error.message,
  });
};
export default errorHandler;
