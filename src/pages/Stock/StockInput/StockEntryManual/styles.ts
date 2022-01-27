import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const AddSkillModal = styled(Modal)`
    @media only screen and (max-width: 1100px) {
        .modal-body {
            padding: 35px;

            form > div {
                flex-direction: column;
                > div {
                    width: 100%;
                }
            }
        }
    }
    .modal-body {
        padding: 35px;
    }

    .searchMenu {
        display: flex;
        align-items: center;
        > :first-child {
            width: 70%;
        }

        > :last-child {
            width: 30%;
        }
    }
`;

export const CreateInputForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const ConfigurePaymentForm = styled(Form)`
    display: flex;
    flex-direction: column;

    > :last-child {
        margin-top: 20px;
    }

    > :nth-child(2) {
        display: flex;
        align-items: center;

        > :last-child {
            margin-top: 20px;
        }

        /*  > :last-child {
            align-items: center;
            > button {
                margin-bottom: -22px;
            }
        } */

        /*  > div {
            width: 50%;
        }

         */
    }

    table {
        color: var(--primary-text-color);

        > tbody > tr > td {
            text-align: right;
        }

        > tbody > tr > :first-child {
            text-align: left;
        }

        > thead > tr {
            > :nth-child(1) {
                width: 83%;
            }

            > :nth-child(1) {
                width: 83%;
            }
            > :nth-child(4) {
                width: 17%;
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
    }
`;

export const Total = styled.div`
    font-weight: bold;
    color: var(--primary-text-color);
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.div``;

export const PaymentConfig = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-text-color);

    > label {
        margin-right: 5px;
        font-weight: bold;
    }

    > div {
        width: 50%;
    }
`;

export const StockHeaderContainer = styled.div`
    margin-bottom: 25px;
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }
`;
