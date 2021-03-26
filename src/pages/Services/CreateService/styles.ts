import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const CreateClientForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 25px;
    > div {
        width: 100%;
    }

    #group1 {
        display: flex;
        > div {
            width: 50%;
        }
    }

    #group2 {
        display: flex;
        > div {
            width: 33.3%;
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
        margin-right: 5px;
    }
`;

export const CreateClientModal = styled(Modal)`
    .modal-90w {
        width: 90%;
        max-width: 1300px;
    }
`;

export const WeekSchedule = styled.div`
    display: flex;
    max-width: 50%;

    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 10px;

        button {
            margin-bottom: 10px;
            width: 120px;
        }
    }

    > :last-child {
        > div {
            display: flex;
            align-items: center;
            > div {
                margin-left: 5px;
                margin-right: 5px;
            }
        }
    }
`;
