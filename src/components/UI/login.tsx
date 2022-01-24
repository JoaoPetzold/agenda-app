import styled from "styled-components";
import { rgba } from 'polished';
import { StyledProps } from "./index";

// ---- Login ---- //
export const LoginContainer = styled.div<StyledProps>`
    width: calc(30vh / 0.5625);
    height: 30%;
    backdrop-filter: blur(1rem);
    border-radius: 0.5rem;

    @media(max-width: 600px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    };
`;

export const LoginForm = styled.form<StyledProps>`
    font-size: 1rem;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 3.5rem 2.6rem 1.5rem 3rem;
    grid-template-areas: 
        "LHEAD"
        "LUSER"
        "LPASS"
        "LSPAN"
        "LBTN";

    justify-content: center;

    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0.5rem 0.15rem rgba(0,0,0,0.25);
    border-radius: 0.5rem;
    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => rgba(props.theme.Gray6, 0.75)};

    input{
        align-self: flex-start;
        justify-self: center;
    };

    #cadastro{
        color: ${(props) => props.theme.Blue};
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        };
    };

    @media(max-width: 600px) {
        
    };
`;

export const RegisterContainer = styled.div<StyledProps>`
    width: calc(30vh / 0.5625);
    height: 40%;
    backdrop-filter: blur(1rem);
    border-radius: 0.5rem;

    @media(max-width: 600px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    };
`;

export const RegisterForm = styled.form<StyledProps>`
    font-size: 1rem;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 3.5rem 3.5rem 3.5rem 3.5rem 3rem;
    grid-template-areas: 
        "LHEAD"
        "LNAME"
        "LUSER"
        "LPASS"
        "CPASS"
        "LBTN";

    justify-content: center;

    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0.5rem 0.15rem rgba(0,0,0,0.25);
    border-radius: 0.5rem;
    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => rgba(props.theme.Gray6, 0.75)};

    input{
        align-self: flex-start;
        justify-self: center;
    };

    #cadastro{
        color: ${(props) => props.theme.Blue};
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        };
    };

    @media(max-width: 600px) {
        
    };
`;
// ---- Fim Login ---- //