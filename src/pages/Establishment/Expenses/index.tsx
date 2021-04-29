import React, { useState } from 'react';
import Input from '../../../components/UnformFields/Input';
import Select from '../../../components/UnformFields/Select';
import DatePicker from '../../../components/UnformFields/DatePicker';
import { Container, AddSkillModal } from './styles';

const Expenses: React.FC = () => {
    const [show, setShow] = useState(false);

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
                Adicionar despesa
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
                        <p>Inclusão de despesas</p>
                    </AddSkillModal.Title>
                </AddSkillModal.Header>
                <AddSkillModal.Body>
                    <div className="treeFieldsgroup">
                        <Input
                            textTransform="lowercase"
                            name="email"
                            label="Nome da despesa"
                        />
                        <Input
                            textTransform="lowercase"
                            name="email"
                            label="Valor"
                        />
                        <Input
                            textTransform="lowercase"
                            name="email"
                            label="Dia do vencimento"
                        />
                    </div>
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
