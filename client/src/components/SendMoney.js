import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SendMoney = ({ userId }) => {
  const [receiverPhone, setReceiverPhone] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendMoney = async (e) => {
    e.preventDefault();
    // console.log({
    //   senderId: userId,
    //   receiverPhoneNumber: receiverPhone,
    //   amount: sendAmount,
    // });  
    try {
      const response = await axios.post('http://localhost:5000/api/transaction/send', {
        senderId: userId,
        receiverPhoneNumber: receiverPhone,
        amount: sendAmount,
      });
      setMessage(response.data.msg);
      setError('');
      setReceiverPhone('');
      setSendAmount('');
      setTimeout(() => navigate('/balance'), 2000); // Redirect to balance after 2 seconds
    } catch (err) {
      setError('Transaction failed');
      setMessage('');
      console.error(err.response?.data)
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Send Money</h2>
      <form onSubmit={handleSendMoney} style={styles.form}>
        <input
          type="text"
          placeholder="Receiver's Phone Number"
          value={receiverPhone}
          onChange={(e) => setReceiverPhone(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={sendAmount}
          onChange={(e) => setSendAmount(e.target.value)}
          min="1"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Send Money
        </button>
      </form>
      {message && <p style={styles.successMessage}>{message}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}
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
  heading: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    width: '250px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  button: {
    padding: '0.8rem',
    width: '250px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  successMessage: {
    color: 'green',
    fontSize: '1rem',
    marginTop: '1rem',
  },
  errorMessage: {
    color: 'red',
    fontSize: '1rem',
    marginTop: '1rem',
  },
};

export default SendMoney;
