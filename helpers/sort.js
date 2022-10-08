const parseSortFromRequest = (req) => {
  let { sort } = req.query;
  if (!sort) return null;
  sort = sort.replace(/\s/g, "");
  const [column, direction] = sort.split(":");
  return { column, direction };
};

module.exports = {
  parseSortFromRequest,
};
