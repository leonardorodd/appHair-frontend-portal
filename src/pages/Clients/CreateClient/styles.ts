import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div`
    button svg {
        margin-right: 10px;
    }
`;

export const CreateClientForm = styled(Form)`
    > button {
        background: none;
        color: var(--primary-text-color);
        width: 150px;
    }

    #rowOne,
    #rowTwo,
    #rowTree,
    #rowFour {
        display: flex;
        flex-direction: row;
    }

    #rowOne,
    #rowFour {
        > div {
            width: 33%;
            display: flex;
            flex-direction: column;
        }

        > :nth-child(2) {
            margin: 0px 20px 0px 20px;
        }
    }

    #rowTwo {
        > div {
            width: 50%;
            display: flex;
            flex-direction: column;
        }

        > :first-child {
            margin-right: 20px;
        }
    }

    #rowTree {
        > div {
            width: auto;
            display: flex;
            flex-direction: column;
        }

        > :nth-child(2) {
            width: 50%;
        }

        > :nth-child(1),
        > :nth-child(2),
        > :nth-child(3) {
            margin: 0px 20px 0px 0px;
        }
    }
`;

export const CreateClientModal = styled(Modal)`
    .modal-title {
        h5 {
            padding: 5px;
            color: var(--base-quaternary-color);
        }

        /* #plus {
            margin-left: -12px;
            margin-bottom: 15px;
            background: #fff;
            border: 3px solid var(--base-fibre-color);
            border-radius: 50%;
            padding: 2px;
            color: var(--base-fibre-color);
        } */
    }

    .modal-footer {
        justify-content: flex-end;
    }

    .modal-header {
        padding: 5px;
        background: var(--base-secondary-color);
    }
`;
