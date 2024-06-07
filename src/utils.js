export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    console.log('User logged in successfully:', data);
    // Store the JWT token
    localStorage.setItem('token', data.token);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};