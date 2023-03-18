import React from 'react';
import Text from '../../components/Text';
import FooterNav from './components/FooterNav';
import '../../assets/styles/sections/Footer.css';

const Footer = () => {
  const githubLink = (
    <a href="https://github.com/ayxxnshxrif" className="author" key="author">
      Ayaan Sharif
    </a>
  );
  return (
    <footer className="footer">
      <div className="content footer__content">
        <Text text={['Copyright ', githubLink, ' 2023']} tag="span" />
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
