import styled from 'styled-components';

export const Container = styled.div`
    /*     background-color: ${props => props.theme.color.primary};
 */
    color: ${props => props.theme.color.white};
    grid-column: 2;
    grid-row: 2;
    padding: 30px;
    background: var(--base-background-color);
    height: calc(100vh - 54px);
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
