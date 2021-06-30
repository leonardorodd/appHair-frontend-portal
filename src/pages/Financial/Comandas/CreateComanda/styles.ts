import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div`
    display: flex;
`;

export const Form1 = styled.div``;

export const Form2 = styled.div``;

export const TotalValue = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    width: 100%;
    height: 50px;
    background-color: #eee;
`;

export const PendingValue = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    width: 100%;
    height: 50px;
    background-color: #eee;
    margin-bottom: 10px;
`;

export const PaymentContainer = styled.div``;

export const CreateComandaForm = styled(Form)`
    display: flex;
    align-items: flex-end;
    width: 100%;

    > div {
        width: 25%;
    }

    > :last-child {
        margin: 5px;
    }
`;

export const ConfigurePaymentForm = styled(Form)`
    display: flex;
    flex-direction: column;

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

    > :last-child {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

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

export const AddComandaMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

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

    @media only screen and (max-width: 1000px) {
        #group1 {
            flex-direction: column-reverse;

            > div {
                width: 100% !important;
            }

            > :first-child {
                > :last-child {
                    > div {
                        flex-direction: column;
                        > div {
                            width: 100% !important;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 800px) {
        #group2,
        #group3 {
            flex-direction: column;
            > div {
                width: 100% !important;
            }
        }
    }
    @media only screen and (max-width: 1200px) {
        #group4,
        #group5,
        #group6 {
            flex-direction: column;
            > div {
                width: 100% !important;
            }
        }
    }

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
    .modal-body {
        table {
            margin-top: 20px;
            color: var(--primary-text-color);
        }

        > :nth-child(2) {
            padding: 15px;
        }
    }
`;
