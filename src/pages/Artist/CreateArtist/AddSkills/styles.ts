import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const Container = styled.div`
    > button {
        width: 100%;
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
