const TestingTime = (request, response, next) => {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 9 && hour <= 17) {
    return next();
  }
  return response.status(400).send('Come Back tomorrow');
};

// export the function
module.exports = TestingTime;
