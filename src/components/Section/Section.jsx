import { PropTypes } from 'prop-types';
import { SectionStyled } from './Section.styled';

const Section = ({ className, children }) => {
  return <SectionStyled className={className}>{children}</SectionStyled>;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Section;
