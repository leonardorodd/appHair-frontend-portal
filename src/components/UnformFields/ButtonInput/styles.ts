import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 10px;

    label {
        cursor: pointer;
        background: none;
        border: none;
        border-radius: 20px;
        font-weight: bold;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        font-size: 11px;
        height: 35px;
        transition: background 0.3s;
        color: var(--base-quaternary-color);
        background: var(--base-tertiary-color);

        &:hover {
            background: ${darken(0.04, '#fd5c0e')};
        }

        > input {
            display: none;
        }
    }
`;
