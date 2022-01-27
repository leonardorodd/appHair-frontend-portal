import styled, { css, keyframes } from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    table {
        color: var(--primary-text-color);

        > thead > tr > th {
            width: 25%;
        }

        > thead > tr {
            > :last-child {
                width: 5%;
            }
        }

        > tbody {
            svg {
                cursor: pointer;
                width: 20px;
                height: 20px;

                &:hover {
                    color: var(--base-tertiary-color);
                }
            }
        }

        > tbody > tr {
            > :first-child {
                > form > div {
                    margin: 0px;
                }
            }
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CheckBoxContainer = styled(Form)``;

export const PromotionHeaderContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
        margin-bottom: 20px;
    }

    > h1::after {
        content: '';
        display: block;
        width: 150px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }

    > :last-child {
        margin: 25px 0px;
        display: flex;
        justify-content: flex-end;

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
