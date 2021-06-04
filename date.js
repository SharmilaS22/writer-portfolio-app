exports.getToday = () => {
  let today = new Date();
  let options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return today.toLocaleDateString("en-US", options);
};
