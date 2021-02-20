import styled from 'styled-components';

interface IInputProps {
    textTransform: string;
}

export const Container = styled.div<IInputProps>`
    display: flex;
    margin: 5px;
    flex-direction: column;

    &:focus-within {
        > div {
            label {
                color: var(--base-tertiary-color);
            }

            svg {
                color: var(--base-tertiary-color);
            }
        }

        > input {
            border-color: var(--base-tertiary-color);
        }
    }

    > div {
        display: flex;
        align-items: center;

        > label {
            margin-bottom: 0px;
            font-size: 13px;
            color: var(--primary-text-color);
        }

        > svg {
            margin-left: 5px;
            width: 17px;
            height: 17px;
        }

        > p {
            background-color: red;
            font-size: 13px;
        }
    }

    > input {
        text-transform: ${props => props.textTransform};
        border: 0px;
        border-bottom: 1px solid var(--primary-border-color);
        height: 35px;
        padding-left: 10px;
        color: var(--primary-text-color);

        &[disabled] {
            background-color: var(--base-quaternary-color);
            cursor: not-allowed;
        }
    }

    > span {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #db3b21;

        > svg {
            width: 16px;
            height: 16px;
        }
    }
`;
