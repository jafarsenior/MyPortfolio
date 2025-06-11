import React from 'react';

const Loading = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF7DC', // light gray background
  },
  spinner: {
    width: '60px',
    height: '60px',
    border: '6px solid #e5e7eb',
    borderTop: '6px solid #685032', // blue-600
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '16px',
    fontSize: '1rem',
    color: '#685032', // gray-700
    fontFamily: 'sans-serif',
  },
};

// Global CSS for keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

export default Loading;
