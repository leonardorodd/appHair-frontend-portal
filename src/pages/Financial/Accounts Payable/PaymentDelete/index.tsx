import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Container, CreateComandaModal } from './styles';
import '../../../../styles/customreactselect.css';
import '../../../../styles/customreactdatepicker.css';

const CreateClient: React.FC = () => {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    return (
        <Container>
            <MdDelete onClick={handleShow} />
            <CreateComandaModal
                show={show}
                onHide={handleClose}
                className="baseModalStyle"
                dialogClassName="modal-90w"
                size="lg"
                backdrop="static"
            >
                <CreateComandaModal.Header>
                    <CreateComandaModal.Title>
                        <p>Confirmação de exclusão</p>
                    </CreateComandaModal.Title>
                </CreateComandaModal.Header>
                <CreateComandaModal.Body>
                    <strong>Tem certeza?</strong>
                    <p>Essa ação não pode ser revertida.</p>
                </CreateComandaModal.Body>
                <CreateComandaModal.Footer>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="button"
                        onClick={handleClose}
                    >
                        Voltar
                    </button>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="submit"
                        form="form"
                    >
                        Confirmar
                    </button>
                </CreateComandaModal.Footer>
            </CreateComandaModal>
        </Container>
    );
};

export default CreateClient;
