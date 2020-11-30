import Cookies from 'js-cookie';
import jwt from 'jwt-decode';

// TODO: Auth should be checked with a simple api call and token in http-only cookie
export const getToken = (): string | undefined => Cookies.get('jwt');
export const clearToken = () => Cookies.remove('jwt');

export const isAuthenticated = (): boolean => {
  const token = getToken();
  if (token) {
    try {
      const decoded: any = jwt(token);
      if (Math.floor(new Date().getTime() / 1000) < decoded.exp) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }
  return false;
};

export const getUserId = (): { userId: string; token: string } | null => {
  const token = getToken();
  if (token) {
    try {
      const decoded: { user: { _id: string; email: string }; exp: number } = jwt(token);
      if (Math.floor(new Date().getTime() / 1000) < decoded.exp) {
        return { token: token, userId: decoded.user._id };
      }
      clearToken();
    } catch (err) {
      return null;
    }
  }
  return null;
};
