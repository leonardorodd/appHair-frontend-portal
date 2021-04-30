import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 1100px) {
        > button {
            width: 42%;
        }
    }
    margin-top: -15px;
    margin-bottom: 10px;
`;
export const AddSkillModal = styled(Modal)`
    @media only screen and (max-width: 1100px) {
        .modal-body {
            padding: 35px;

            > div {
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
