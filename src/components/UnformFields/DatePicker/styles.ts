import styled from 'styled-components';

export const Container = styled.div`
    > input {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid var(--primary-border-color);
        border-radius: 5px;

        /*  &:focus {
            border-color: var(--base-fibre-color);
        } */
    }
    > label {
        display: inline;
        font-weight: bold;
    }
`;
