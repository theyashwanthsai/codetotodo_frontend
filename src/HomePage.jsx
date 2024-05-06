import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Code to Todo</h1>
      <p style={styles.paragraph}>
        Make sure you have created an account on composio.dev and connect the GitHub application to your account.
        Set up a trigger with the desired repo. Now set the callback URL to:
      </p>
      <p style={styles.callbackUrl}>
        https://f6a15c0b-44d5-4e9a-8cb4-64befeb2b252-00-2zk636m79ds6n.pike.replit.dev/auth
      </p>
      <p style={styles.paragraph}>
        After you have finished the setup, you can start coding, and the Trello board will automatically be updated.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  callbackUrl: {
    fontSize: '16px',
    backgroundColor: '#0000',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
  },
};

export default HomePage;
