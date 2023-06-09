import '../../../assets/styles/homepage/Info.css';
import { useObserver } from '../../../app/hooks';
import Text from '../../../components/Text';
import '../../../assets/styles/homepage/About.css';

const About = () => {
  const { isVisible, containerRef } = useObserver();
  return (
    <section
      className={`about enter-transition ${isVisible ? 'in-viewport' : ''}`}
      aria-label="About"
      ref={containerRef}
    >
      <div className="content about__content">
        <Text tag="span" text="About Kaivo  " className="about__inroduction" />
        <h3 className="about__heading">
          <Text
            tag="span"
            text={[
              'Our ',
              <span
                className="text--highlighted about-text--highlighted"
                key="about-heading-highlighted"
              >
                Goal
              </span>,
              ' is Simple:',
            ]}
            className="about__subheading"
          />
          <Text
            tag="span"
            text={[
              'Deliver high-quality '
,  <span
                className="text--highlighted about-text--highlighted"
                key="about-heading-highlighted"
              >
                Projects
              </span>,
              
             ' that meet the needs and goals of our ',
              <span
                className="text--highlighted about-text--highlighted"
                key="about-heading-highlighted"
              >
                Customer.
              </span>,
            ]}
            className="about__subheading"
          />
        </h3>
        <Text
          tag="p"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in."
          className="about__subtext"
        />
      </div>
    </section>
  );
};

export default About;
