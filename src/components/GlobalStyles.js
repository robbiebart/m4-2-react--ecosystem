import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Raleway', sans-serif;
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6, p, ul, li {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4 {
        font-weight: 700;
    }
    p {
        font-size: 16px;
    }
    a {
        color: hsl(259deg, 100%, 44%);
    }
`;
export default GlobalStyles;
