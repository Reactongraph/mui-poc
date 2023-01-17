import { API_URL } from "./constant";
const DefaultHeader = {
  "content-type": "application/json",
};

const caller = (endpoint, method, body, header = DefaultHeader, hostName = API_URL) => {
  const user = {};
  return fetch(`${hostName}${endpoint}`, {
    headers: header,
    method,
    body: JSON.stringify(body),
  })
    .then((res) => {
      user.status = res.status;
      return res.json();
    })
    .then((val) => {
      user.data = val;
      return user;
    })
    .catch((err) => {
      user.status = 404;
      user.data = err.message;
      return user;
    });
};

export default caller;
