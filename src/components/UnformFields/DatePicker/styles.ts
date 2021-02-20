import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;

    &:focus-within {
        color: var(--base-tertiary-color);
    }

    > input {
        padding: 10px;
        border: 1px solid var(--primary-border-color);
        border-radius: 5px;
    }
    > label {
        display: inline;
        margin-bottom: 0px;
    }
`;
