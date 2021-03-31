import React, { useState } from 'react';
import Input from '../../../../components/UnformFields/Input';
import Select from '../../../../components/UnformFields/Select';
import DatePicker from '../../../../components/UnformFields/DatePicker';
import { Container, AddSkillModal } from './styles';

const AddSkills: React.FC = () => {
    const [show, setShow] = useState(false);

    const skillsList = [
        { value: 1, label: 'Barba' },
        { value: 2, label: 'Cabelo' },
        { value: 3, label: 'Manícure e pedícure' },
    ];

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    return (
        <Container>
            <button
                className="fibre-button fibre-button--default"
                type="button"
                onClick={handleShow}
            >
                Gerar relatório do cliente
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
                        <p>Relatório - Histórico do cliente</p>
                    </AddSkillModal.Title>
                </AddSkillModal.Header>
                <AddSkillModal.Body>
                    <DatePicker label="Data inicial" name="dataInicial" />
                    <DatePicker label="Data final" name="dataFinal" />
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
                        Gerar
                    </button>
                </AddSkillModal.Footer>
            </AddSkillModal>
        </Container>
    );
};

export default AddSkills;
