import styled from "styled-components";

export default function Footer() {
  return <StyledFooter>© Andrea Hohnsen</StyledFooter>;
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 10px 0;
`;
