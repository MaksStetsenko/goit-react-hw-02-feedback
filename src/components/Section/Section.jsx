import React from 'react';
import { SectionStyled, SectionTitledStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionTitledStyled>{title}</SectionTitledStyled>
      {children}
    </SectionStyled>
  );
}

export default Section;