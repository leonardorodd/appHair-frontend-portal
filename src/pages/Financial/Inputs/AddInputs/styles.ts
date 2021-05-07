import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const AddSkillModal = styled(Modal)`
    @media only screen and (max-width: 1100px) {
        .modal-body {
            padding: 35px;

            > form > div {
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
