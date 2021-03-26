import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const CreateClientForm = styled(Form)`
    justify-content: space-around;
    padding: 25px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1000px) {
        > :first-child {
            flex-direction: column;
            > div {
                width: 100% !important;
            }
        }

        > :last-child > div {
                flex-direction: column;
            }
        }
    }

    > :first-child {
        display: flex;
        > div {
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 50%;
        }
    }

    > :last-child {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        > :first-child {
            display: flex;
        }
    }

    #group1 {
        display: flex;
        > div {
            width: 50%;
        }
    }
`;

export const SectionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: none;
    color: var(--primary-text-color);
    width: 300px;

    &:hover {
        background: none;
        color: var(--base-tertiary-color);
    }

    > svg {
        transition: transform 0.4s;
        width: 15px;
        height: 15px;
    }
`;

export const CreateClientModal = styled(Modal)`
    .modal-90w {
        width: 90%;
        max-width: 1300px;
    }
`;
