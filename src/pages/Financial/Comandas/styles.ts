import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    table {
        color: var(--primary-text-color);

        > thead > tr {
            > :last-child {
                width: 7%;
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

            > tr > :last-child {
                > div {
                    display: flex;
                    > svg {
                        margin-left: 5px;
                    }
                }
            }
        }
    }
`;

export const ComandaHeaderContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
        line-height: 22px !important;
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }

    > :last-child {
        display: flex;
        justify-content: space-between;
        margin: 25px 0px;

        > :first-child {
            svg {
                margin-left: 5px;
            }
        }

        > :last-child {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

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

export const CreateComandaForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 35px;
`;

export const AddComandaMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
