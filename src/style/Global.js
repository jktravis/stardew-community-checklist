import theme from "./theme";
import { css, Global as EmotionGlobal } from "@emotion/react";

const url = `${process.env.PUBLIC_URL}/background3.jpg`;

const globalStyles = css`
  body {
    color: ${theme.colors.textColor};
    background: url(${url}) no-repeat center center fixed;
    background-size: cover;
  }

  h1,
  h2,
  h3 {
    color: ${theme.colors.textColor};
    text-shadow: 0 0 3px #f7f3f3;
    margin-left: 0.5rem;
  }

  h1 {
    text-align: center;
  }

  a {
    color: ${theme.colors.textColor};
  }
  .season {
    padding: 0.125rem;
  }

  #root {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

function Global() {
  return <EmotionGlobal styles={globalStyles} />;
}

export default Global;
