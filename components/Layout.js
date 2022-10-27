import styled from "styled-components";
import Header from "./Header.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
