import styled from 'styled-components';

export const Container = styled.div`
    /*     background-color: ${props => props.theme.color.primary};
 */
    color: ${props => props.theme.color.white};
    grid-area: main;
    padding: 30px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.color.tertiary};
    }
`;
