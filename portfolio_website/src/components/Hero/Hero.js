import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { Main } from "next/document";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to
        <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a full stack developer with a passion for creating beautiful and
        user friendly websites. I have a strong background in front-end
        development and have worked with a variety of technologies.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
