import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <h1>🌮 Recipes App</h1>
      <StyledNavigation>
        <Anchor href="#">Startseite</Anchor>
        <Anchor href="#">Veggie</Anchor>
        <Anchor href="#">Dessert</Anchor>
      </StyledNavigation>
    </header>
  );
}

const StyledNavigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 4px 0;
`;

const Anchor = styled.a`
  text-align: center;
  padding: 12px 0;
  width: 100%;
  color: black;
  text-decoration: none;
  border: 2px solid transparent;

  &:hover {
    border-bottom: 1px solid black;
  }
`;
