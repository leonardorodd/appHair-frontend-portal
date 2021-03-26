import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;

    &:focus-within {
        > label {
            color: var(--base-tertiary-color);
        }
    }

    > label {
        margin-left: 15px;
        margin-bottom: 5px;
        font-size: 13px;
        font-weight: bold;
        color: var(--primary-text-color);
    }
`;
