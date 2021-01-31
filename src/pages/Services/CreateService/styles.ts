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
    #rowFour {
        display: flex;
        flex-direction: row;

        > div {
            width: 33%;
        }

        > :nth-child(2) {
            margin: 0px 20px 0px 20px;
        }
    }

    #rowTwo {
        display: flex;
        flex-direction: row;

        > div {
            width: 50%;
        }

        > :first-child {
            margin-right: 20px;
        }
    }

    #rowTree {
        display: flex;
        flex-direction: row;

        > div {
            width: auto;
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

    div {
        display: flex;
        flex-direction: column;
    }

    /* > input,
    textarea {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid var(--primary-border-color);
        border-radius: 5px;

        &:focus {
            border-color: var(--base-fibre-color);
        }
    }

    > label {
        display: inline;
        font-weight: bold;
    }

    > textarea {
        resize: none;
        min-height: 80px;
    }

    > h5 {
        margin-top: -6px;
        color: var(--tertiary-text-color);
        font-size: 11px;
    }

    > span {
        margin-top: -6px;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    input[type='checkbox'] {
        border: 1px solid var(--primary-border-color);
        border-radius: 5px;
        position: relative;
        width: 20px;
        height: 20px;
        appearance: none;
        cursor: pointer;

        &::before {
            position: absolute;
            content: '';
            top: 2px;
            left: 6px;
            width: 8px;
            height: 14px;
            border-style: solid;
            border-color: white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }

        &:checked {
            border: none;
            background: var(--base-fibre-color);
        }
    }

    button {
        width: 200px;
    }

    .react-select__control {
        margin-bottom: 10px;
    } */
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
