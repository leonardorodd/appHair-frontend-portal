import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const FieldSet = styled.div`
    border-bottom: 1px solid var(--primary-border-color);
    font-weight: bold;
    padding-bottom: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    color: var(--base-tertiary-color);
`;

interface SectionButtonProps {
    horizontalLine: boolean;
}

export const SectionButton = styled.button.attrs<SectionButtonProps>(
    ({ horizontalLine }) => ({
        horizontalLine,
    }),
)`
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

export const CreateClientForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 35px;

    #group1 {
        display: flex;

        > :first-child {
            width: 80%;

            > :last-child {
                display: flex;
                flex-direction: column;
                width: 100%;

                > div {
                    display: flex;
                    > div {
                        width: 50%;
                    }
                }
            }
        }

        > :last-child {
            width: 20%;
            border-radius: 5px;
        }
    }

    #group2,
    #group4,
    #group5,
    #group6 {
        display: flex;
        > div {
            width: 25%;
        }
    }

    #group3 {
        display: flex;
        > div {
            width: 33.3%;
        }
    }
`;

export const CreateClientModal = styled(Modal)`
    .modal-90w {
        width: 90%;
        max-width: 1300px;
    }
`;
