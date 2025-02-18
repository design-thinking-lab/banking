import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigates to the login page
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigates to the register page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.greeting}>Welcome to Banking app</h1>
      <p style={styles.message}>Your gateway to transactions</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleLoginClick} style={styles.button}>
          Login
        </button>
        <button onClick={handleRegisterClick} style={styles.button}>
          Register
        </button>
      </div>
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
    backgroundColor: '#f9fafb',
    padding: '20px',
  },
  greeting: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#333',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#666',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '0.8rem 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#FF5722',
    color: 'white',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default LandingPage;
