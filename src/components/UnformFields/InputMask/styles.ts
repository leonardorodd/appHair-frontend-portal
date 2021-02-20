import styled, { css, keyframes } from 'styled-components';

interface IInputProps {
    textTransform: string;
    loading?: boolean;
}

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div.attrs<IInputProps>(({ loading }) => ({
    disabled: loading,
}))<IInputProps>`
    position: relative;
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

        > input {
            width: 100%;
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

        ${props =>
            props.loading &&
            css`
                > svg {
                    position: absolute;
                    right: 20px;
                    width: 12px;
                    height: 12px;
                    color: var(--base-tertiary-color);
                    animation: ${rotate} 1.5s linear infinite;
                }
            `}
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
