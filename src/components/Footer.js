import React from "react";
import styled from "@emotion/styled";

const FooterStyle = styled("footer")`
  height: 3rem;
  border-top: 1px solid rgba(149, 147, 147, 0.84);
  display: flex;
  align-items: center;
  font-size: small;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0.5rem;
    display: flex;

    li {
      margin: 0.25rem;
    }
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <ul>
        <li>
          <a href="https://github.com/jktravis/stardew-community-checklist/tree/main">Source</a>
        </li>
      </ul>
    </FooterStyle>
  );
}

export default Footer;
