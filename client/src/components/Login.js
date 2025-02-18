import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // console.log('onLogin prop:', onLogin);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Login Attempt:', { phoneNumber, password });
      const response = await axios.post('http://localhost:5000/login', { phoneNumber, password });
      if (response.status === 200) {
        console.log('Login Response:', response.data);
        localStorage.setItem('token', response.data.token);
        onLogin(response.data.userId);
        navigate('/dashboard');
      } else {
        setError('Unexpected response. Please try again.');
      }
    } catch (err) {
      console.error('Login Error:', err.response?.data || err);
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Welcome to LowTechBank</h1>
      </div>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#e5e5e5',  // Light background color
    padding: '20px',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',  // Space between the title and the login form
  },
  title: {
    fontSize: '3.5rem',  // Larger font size for the title
    fontWeight: '700',
    color: '#3b82f6',  // Blue color for the title
    textAlign: 'center',
    margin: '0',  // Remove default margin
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',  // Soft shadow effect for the title
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px', // Max width to keep the form centered and not too wide
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '10px',  // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '0.8rem',
    width: '100%',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  inputFocus: {
    borderColor: '#3b82f6',
    boxShadow: '0 0 5px rgba(59, 130, 246, 0.6)',  // Focus effect for inputs
  },
  button: {
    padding: '0.8rem',
    width: '100%',
    backgroundColor: '#3b82f6',  // Blue background color
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#2563eb',  // Darker blue on hover
    transform: 'scale(1.05)',  // Slight scaling effect
  },
  error: {
    color: 'red',
    fontSize: '1rem',
    marginTop: '1rem',
  },
};

// Apply the styles dynamically when input is focused
const InputField = ({ value, onChange, type, placeholder, error }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={error ? { ...styles.input, borderColor: 'red' } : styles.input}
    onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
    onBlur={(e) => e.target.style = styles.input}
  />
);


export default Login;
