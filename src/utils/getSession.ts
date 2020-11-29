import Cookies from 'js-cookie';

export const getSession = () => {
  const sessionCookie = Cookies.get('__session');
  let session;

  try {
    if (sessionCookie) {
      session = sessionCookie;
    }
  } catch (error) {
    console.log(error);
  }

  return session;
};

export const logOut = () => {
  Cookies.remove('__session');
};
