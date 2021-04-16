import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 54px 1fr;
    grid-template-areas:
        'header'
        'main';
    height: 100vh;

    @media only screen and (min-width: 46.875em) {
        grid-template-columns: 250px 1fr; /* Show the side nav for non-mobile screens */
        grid-template-areas:
            'sidebar header'
            'sidebar main';
    }

    .active {
        transform: translateX(0);
    }

    #menu-icon {
        position: fixed;
        display: flex;
        top: 10px;
        left: 10px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        z-index: 1;
        cursor: pointer;
        padding: 5px;
    }

    #close-icon {
        position: absolute;
        visibility: visible;
        top: 8px;
        right: 12px;
        cursor: pointer;
        font-size: 20px;
        color: #ddd;
    }

    /* display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 54px 1fr;
    grid-template-areas:
        'sidebar header'
        'sidebar main';
    height: 100vh; */

    /* @media only screen and (max-width: 700px) {
        grid-template-columns: 0px auto;

        > :nth-child(1) {
            > button {
                display: block;
            }
        }

        > :nth-child(2) {
            width: 0%;
            > button {
                display: block;
            }
        }
    } */
`;
