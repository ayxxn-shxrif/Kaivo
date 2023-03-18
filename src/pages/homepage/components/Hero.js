import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useObserver } from '../../../app/hooks';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import '../../../assets/styles/homepage/Hero.css';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../../assets/images/logo.svg';
import '../../../assets/styles/homepage/Logo.css'

const Hero = () => {
  const navigate = useNavigate();
  const { containerRef, isVisible } = useObserver();

  const handleClick = () => {
    navigate('/shop');
  };

  return (
    <div>
      <section
        className={`hero enter-transition ${isVisible ? 'in-viewport' : ''}`}
        aria-label="Hero"
        ref={containerRef}
      >
        <div className="content hero__content">
           <Link to="/" className="logo__home">
        <LogoSVG />
      </Link>    
          <Text
            tag="h2"
            text={[
              "The Best       ",
              <span
                className="text--highlighted hero-text--highlighted"
                key="hero-heading-highlighted"
              >
                    Project Selling
              </span>,
              ' website in the World',
            ]}
            className="hero__heading"
          />
          <Button
            handleClick={handleClick}
            text={<span>Projects store</span>}
            className="btn btn--primary"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
