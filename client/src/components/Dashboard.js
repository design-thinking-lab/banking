import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Dashboard = ({ userId }) => {
  const { t } = useTranslation();  // Use the hook to access translations

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{t('dashboard.heading')}</h2>  {/* Translated heading */}
      <p style={styles.text}>{t('dashboard.text')}</p>  {/* Translated text */}

      {/* Button Links to Navigate to Different Pages */}
      <div style={styles.buttonContainer}>
        <Link to="/balance">
          <button style={{ ...styles.button, ...styles.buttonGreen }}>
            {t('dashboard.view_balance')}  {/* Translated button text */}
          </button>
        </Link>
        <Link to="/deposit">
          <button style={{ ...styles.button, ...styles.buttonBlue }}>
            {t('dashboard.deposit_money')}  {/* Translated button text */}
          </button>
        </Link>
        <Link to="/withdraw">
          <button style={{ ...styles.button, ...styles.buttonRed }}>
            {t('dashboard.withdraw_money')}  {/* Translated button text */}
          </button>
        </Link>
        <Link to="/send-money">
          <button style={{ ...styles.button, ...styles.buttonPurple }}>
            {t('dashboard.send_money')}  {/* Translated button text */}
          </button>
        </Link>
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
    backgroundColor: '#f3f4f6', // gray-100 background
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
  },
  text: {
    fontSize: '1.125rem',
    marginBottom: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  button: {
    width: '16rem', // Equivalent to w-64
    padding: '0.75rem', // Equivalent to py-3
    color: 'white',
    fontWeight: '600',
    borderRadius: '0.5rem', // rounded-lg
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-md
    cursor: 'pointer',
    transition: 'background-color 0.2s, box-shadow 0.2s',
    outline: 'none',
  },
  buttonGreen: {
    backgroundColor: '#10b981', // green-500
  },
  buttonBlue: {
    backgroundColor: '#3b82f6', // blue-500
  },
  buttonRed: {
    backgroundColor: '#ef4444', // red-500
  },
  buttonPurple: {
    backgroundColor: '#8b5cf6', // purple-500
  },
};

export default Dashboard;
