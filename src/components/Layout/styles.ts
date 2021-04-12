import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 54px auto;
    height: 100vh;

    @media only screen and (max-width: 700px) {
        grid-template-columns: 0px;

        > :nth-child(1) {
            > button {
                display: block;
            }
        }

        > :nth-child(2) {
            width: 0%;
            overflow: hidden;
            -webkit-transition: width 1s ease-in-out;
            -moz-transition: width 1s ease-in-out;
            -o-transition: width 1s ease-in-out;
            transition: width 1s ease-in-out;
        }
    }
`;
