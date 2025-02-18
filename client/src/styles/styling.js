export const styles = {
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
    buttonGreenHover: {
      backgroundColor: '#059669', // green-600
    },
    buttonBlue: {
      backgroundColor: '#3b82f6', // blue-500
    },
    buttonBlueHover: {
      backgroundColor: '#2563eb', // blue-600
    },
    buttonRed: {
      backgroundColor: '#ef4444', // red-500
    },
    buttonRedHover: {
      backgroundColor: '#dc2626', // red-600
    },
    buttonPurple: {
      backgroundColor: '#8b5cf6', // purple-500
    },
    buttonPurpleHover: {
      backgroundColor: '#6b21a8', // purple-600
    },
  };