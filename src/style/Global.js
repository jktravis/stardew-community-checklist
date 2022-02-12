import theme from "./theme";
import { css, Global as EmotionGlobal } from "@emotion/react";

const globalStyles = css`
  body {
    color: ${theme.colors.textColor};
    background: url("background3.jpg") no-repeat center center fixed;
    background-size: cover;
  }

  h1,
  h2,
  h3 {
    color: ${theme.colors.textColor};
    text-shadow: 0 0 3px #f7f3f3;
    margin-left: 0.5rem;
  }

  a {
    color: ${theme.colors.textColor};
  }
  .season {
    padding: 0.125rem;
  }
`;

function Global() {
  return <EmotionGlobal styles={globalStyles} />;
}

export default Global;
