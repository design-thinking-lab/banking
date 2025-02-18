import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    name: '',
    email: '',
    bankName: '',
    password: '', // Added password field
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { phoneNumber, name, email, bankName, password } = formData;

    // Basic validation
    if (!phoneNumber || !name || !email || !bankName || !password) {
      setError('All fields are required');
      setSuccess('');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setSuccess('');
      return;
    }

    // Send registration data to the backend API
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setError('');
        setSuccess(data.success);
        setFormData({
          phoneNumber: '',
          name: '',
          email: '',
          bankName: '',
          password: '',
        });

        // Navigate to the login page after successful registration
        setTimeout(() => {
          navigate('/login'); // Redirect to the login page
        }, 2000); // Delay for 2 seconds to show success message before navigating
      } else {
        setError(data.error);
        setSuccess('');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Register with LowTechBank</h1>
      </div>
      <h2 style={styles.heading}>Create Account</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="bankName"
          placeholder="Bank Name"
          value={formData.bankName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <button type="submit" style={styles.button}>Register</button>
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
    backgroundColor: '#e5e5e5',
    padding: '20px',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#3b82f6',
    textAlign: 'center',
    margin: '0',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
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
    maxWidth: '400px',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
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
  },
  button: {
    padding: '0.8rem',
    width: '100%',
    backgroundColor: '#3b82f6',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  error: {
    color: 'red',
    fontSize: '1rem',
    marginTop: '1rem',
  },
  success: {
    color: 'green',
    fontSize: '1rem',
    marginTop: '1rem',
  },
};

export default Register;
