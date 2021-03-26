import styled from 'styled-components';

export const Container = styled.div`
    margin: 15px;
    display: flex;
    align-items: center;

    input[type='checkbox'] {
        border: 1px solid var(--primary-border-color);
        border-radius: 5px;
        margin-right: 5px;
        position: relative;
        width: 16px;
        height: 16px;
        appearance: none;
        cursor: pointer;

        &::before {
            position: absolute;
            content: '';
            top: 0px;
            left: 4px;
            width: 7px;
            height: 12px;
            border-style: solid;
            border-color: white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }

        &:checked {
            border: none;
            background: var(--base-tertiary-color);
        }
    }

    > label {
        margin: 0px;
        color: var(--primary-text-color);
    }
`;
