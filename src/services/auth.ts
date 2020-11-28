import axios from 'axios';

export default class Auth {
  public static async loginUser(userEmail: string, password: string) {
    const response = await axios.post('http://localhost:8000/login', {
      email: userEmail,
      password: password,
    });

    if (response.data.token) {
      return response.data.token;
    }

    return false;
  }
}
