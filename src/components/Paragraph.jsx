import styled from "@emotion/styled";

// Justified text leaves wide gaps on narrow screens, so only justify from md up
const Paragraph = styled.p`
  text-indent: 1em;

  @media (min-width: 48em) {
    text-align: justify;
  }
`;

export default Paragraph;
