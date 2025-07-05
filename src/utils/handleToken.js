export const getToken = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('No access token found');
  }
  return token;
}

export const setToken = (token) => {
  if (!token) {
    throw new Error('Token cannot be null or undefined');
  }
  localStorage.setItem('accessToken', token);
}