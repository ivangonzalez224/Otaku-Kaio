import store from './redux/store';
import { setUser } from './redux/user/UserSlice';

export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    console.log('User logged in successfully:', data);
    // Store the JWT token
    store.dispatch(setUser(data));
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    console.error('Error logging in:', error);
  }
};