const jwt = require("jsonwebtoken");

const generalAccessToken = (payload) => {
  const accessToken = jwt.sign(
    {
      payload,
    },
    "accessToken",
    { expiresIn: "1h" }
  );
  return accessToken;
};
const generalRefreshToken = (payload) => {
  const accessToken = jwt.sign(
    {
      payload,
    },
    "refreshToken",
    { expiresIn: "365d" }
  );
  return accessToken;
};

module.exports = {
  generalAccessToken,
  generalRefreshToken,
};
