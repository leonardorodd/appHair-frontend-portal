import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
    table {
        color: var(--primary-text-color);

        > thead > tr {
            > :last-child {
                width: 10%;
            }
        }
    }
`;

interface IButtonProps {
    loading: boolean;
}

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const UploadXML = styled.button.attrs<IButtonProps>(props => ({
    disabled: props.loading,
}))<IButtonProps>`
    > label {
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
            margin-right: 5px;
        }

        > input[type='file'] {
            display: none;
        }
    }

    ${props =>
        props.loading &&
        css`
            svg {
                margin-left: 10px;
                animation: ${rotate} 2s linear infinite;
            }

            > label {
                cursor: not-allowed;
            }
        `}
`;

export const StockHeaderContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
        margin-bottom: 20px;
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }

    > :last-child {
        margin: 25px 0px;
        display: flex;
        justify-content: space-between;

        button {
            margin-right: 10px;
            > svg {
                margin-left: 5px;
            }
        }

        > :first-child {
            display: flex;
        }

        > :last-child {
            position: relative;
            display: flex;
            align-items: center;

            > input {
                height: 35px;
                padding: 10px;
                border-radius: 15px;
                border: 1px solid #eeee;
                padding-left: 40px;

                &:focus {
                    border-color: var(--base-tertiary-color);
                }
            }

            > svg {
                color: var(--base-tertiary-color);
                width: 13px;
                height: 13px;
                left: 15px;
                position: absolute;
                z-index: 1;
            }
        }
    }
`;
