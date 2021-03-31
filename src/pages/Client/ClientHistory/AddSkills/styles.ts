import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    > button {
        width: 20%;
    }
`;
export const AddSkillModal = styled(Modal)`
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
