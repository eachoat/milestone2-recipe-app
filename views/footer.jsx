import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        <a href="https://www.facebook.com/yourpage"><FaFacebook style={styles.icon} /></a>
        <a href="https://www.twitter.com/yourpage"><FaTwitter style={styles.icon} /></a>
        <a href="https://www.instagram.com/yourpage"><FaInstagram style={styles.icon} /></a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: '10px 0',
    textAlign: 'center',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '24px',
    margin: '0 10px',
    color: '#fff',
  },
};

export default Footer;