import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div`
    display: flex;
`;

export const CreateComandaModal = styled(Modal)`
    .modal-body {
        padding: 20px 20px 0px 20px;
    }

    .modal-90w {
        max-width: 400px;
    }
`;
