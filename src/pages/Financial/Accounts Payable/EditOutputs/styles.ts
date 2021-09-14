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

export const SectionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: none;
    color: var(--primary-text-color);

    &:hover {
        color: var(--base-tertiary-color);
        background: none;
    }

    > svg {
        transition: transform 0.4s;
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
`;

export const PaymentContainer = styled.div`
    > :nth-child(3) {
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 10px;
    }
`;

export const ConfigurePaymentForm = styled(Form)`
    display: flex;
    flex-direction: column;

    table {
        color: var(--primary-text-color);
    }

    > :first-child {
        display: flex;
        align-items: center;

        > div {
            width: 50%;
        }

        > button {
            width: 10%;
            margin-bottom: -25px;
        }
    }
`;
