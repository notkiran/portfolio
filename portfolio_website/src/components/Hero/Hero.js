import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle mai center>
        Welcome to
        <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText center></SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
