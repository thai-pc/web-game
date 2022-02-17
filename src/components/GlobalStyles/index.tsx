import { createGlobalStyle } from 'styled-components';
import { fontFamily } from '../../styles/fonts';
import { primaryColor } from '../../styles/theme';

const GlobalStyles = createGlobalStyle`
html{
    height : 100%;
    font-size : 10px;
}
body{
    height : 100%;
    margin : 0;
    box-sizing : border-box;
    font-family : ${fontFamily};
    background-color : ${primaryColor}
}
`;
export default GlobalStyles;
