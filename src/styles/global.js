import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: 'Gilroy-Bold' ;
    src: url('/fonts/Gilroy-Bold.ttf')
}
@font-face {
    font-family: 'Gilroy-Regular' ;
    src: url('/fonts/Gilroy-Regular.ttf')
}
@font-face {
    font-family: 'Gilroy-Medium' ;
    src: url('/fonts/Gilroy-Medium.ttf')
}
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline:0;
    }
    body{
        background: #FFF;
        color: #070707;
        -webkit-font-smoothing: antialiased;

    }
    body, input, button {
        font-size:18;
        font-family: 'Gilroy-Medium', serif;
    }
    button{
        cursor: pointer;
    }    

`;
