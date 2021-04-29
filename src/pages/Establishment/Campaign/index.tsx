/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Input from '../../../components/UnformFields/Input';
import FileInput from '../../../components/UnformFields/VideoInput';
import DatePicker from '../../../components/UnformFields/DatePicker';
import CheckBox from '../../../components/UnformFields/CheckBox';
import { Container, AddSkillModal } from './styles';

const Expenses: React.FC = () => {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    function handleCreateSSHKeySubmitWithKey(
        uploadedSSHKey: React.ChangeEvent<HTMLInputElement>,
    ) {
        const formData = new FormData();

        /*  setLoading({ uploadSSHKey: true });
        refButton.current.style.background = '#65c754';
        const formData = new FormData();
        formData.append('File', uploadedSSHKey);

        apiClient
            .post(`/members/${memberUrn}/keys`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                refreshPage();
            })
            .catch(error => {
                toast.error(error.message);
                refButton.current.style.background = '#d9534f';
            })
            .finally(() => setLoading({ uploadSSHKey: false })); */
    }

    return (
        <Container>
            <button
                className="fibre-button fibre-button--default"
                type="button"
                onClick={handleShow}
            >
                Adicionar Campanha
            </button>
            <AddSkillModal
                show={show}
                onHide={handleClose}
                size="lg"
                className="baseModalStyle"
                backdrop="static"
            >
                <AddSkillModal.Header>
                    <AddSkillModal.Title>
                        <p>Inclusão de Campanha</p>
                    </AddSkillModal.Title>
                </AddSkillModal.Header>
                <AddSkillModal.Body>
                    <Input
                        textTransform="capitalize"
                        name="nomeDaCampanha"
                        label="Nome da campanha"
                    />
                    <div className="twoFieldsGroup">
                        <DatePicker label="Data inicial" name="dataInicial" />
                        <DatePicker label="Data final" name="dataFinal" />
                    </div>
                    <div className="treeFieldsgroup">
                        <CheckBox
                            name="enviarNoWhatsapp"
                            label="Enviar via Whatsapp"
                        />
                        <CheckBox
                            name="enviarNoFacebook"
                            label="Enviar via Facebook"
                        />
                        <CheckBox
                            name="enviarNoInstagram"
                            label="Enviar via Instagram"
                        />
                    </div>
                    <FileInput
                        name="midia"
                        label="Adicionar imagem ou vídeo da campanha (opcional)"
                    />
                </AddSkillModal.Body>
                <AddSkillModal.Footer>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="button"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="submit"
                        form="form"
                    >
                        Confirmar
                    </button>
                </AddSkillModal.Footer>
            </AddSkillModal>
        </Container>
    );
};

export default Expenses;
