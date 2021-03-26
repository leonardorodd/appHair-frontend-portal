import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: none;
    color: var(--primary-text-color);

    &:hover {
        background: none;
        color: var(--base-tertiary-color);
    }

    > svg {
        transition: transform 0.4s;
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
`;
