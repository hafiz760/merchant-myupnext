export const config = (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};