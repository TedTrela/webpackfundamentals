const login = (username, password) => {
  if (username !== 'admin' || password !== 'radical') {
    console.log('incorrect login'); // eslint-disable-line no-console
  }
};

export default login;
