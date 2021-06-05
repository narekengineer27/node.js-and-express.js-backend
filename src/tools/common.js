function ok(res, data, code = 200) {
  return res.status(code).json({ status: true, data: data });
}
function error(res, message, code) {
  return res.status(code).json({ status: false, data: { message: message } });
}

module.exports = {
  ok,
  error
};
