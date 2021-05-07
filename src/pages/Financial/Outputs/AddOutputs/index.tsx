import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { FaPlus } from 'react-icons/fa';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import Input from '../../../../components/UnformFields/Input';
import Select from '../../../../components/UnformFields/Select';
import TextArea from '../../../../components/UnformFields/TextArea';

import MaskedInput from '../../../../components/UnformFields/InputMaskd';
import { Container, AddSkillModal, CreateInputForm } from './styles';

export interface IFormData {
    valor: string;
    formaDePagamento: string;
    tipoDeDespesa: string;
    tipoDeDocumento: string;
    numeroDeDocumento: string;
    colaborador: string;
    descricao: string;
}

const AddOutputs: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    const paymentOptions = [
        { value: 1, label: 'Cartão' },
        { value: 2, label: 'Dinheiro' },
        { value: 3, label: 'Pix' },
        { value: 4, label: 'Voucher' },
    ];

    const expensesOptions = [
        { value: 1, label: 'Limpeza' },
        { value: 2, label: 'Material de escritório' },
        { value: 3, label: 'Pagamento de funcionário' },
        { value: 4, label: 'Insumos' },
    ];

    const documentOptions = [
        { value: 1, label: 'Nota Fiscal' },
        { value: 2, label: 'Recibo' },
        { value: 3, label: 'Boleto' },
    ];

    function handleShow() {
        setShow(true);
    }

    const handleCreateClientSubmit: SubmitHandler<IFormData> = async data => {
        try {
            // Remove all previous errors
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                valor: Yup.string().required('O valor é obrigatório!'),
                descricao: Yup.string().required('A descrição é obrigatória!'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            // Validation passed
        } catch (err) {
            const validationErrors: Record<string, string> = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path || ''] = error.message;
                });
                formRef?.current?.setErrors(validationErrors);
            }
        }
    };

    return (
        <Container>
            <button
                className="fibre-button fibre-button--default"
                type="button"
                onClick={handleShow}
            >
                <span>Adicionar</span>
                <FaPlus />
            </button>
            <AddSkillModal
                show={show}
                onHide={handleClose}
                className="baseModalStyle"
                size="lg"
                backdrop="static"
            >
                <AddSkillModal.Header>
                    <AddSkillModal.Title>
                        <p>Registro de saída</p>
                    </AddSkillModal.Title>
                </AddSkillModal.Header>
                <AddSkillModal.Body>
                    <CreateInputForm
                        id="form"
                        onSubmit={handleCreateClientSubmit}
                        ref={formRef}
                    >
                        <div className="treeFieldsgroup">
                            <MaskedInput
                                mask="R$ 9.999"
                                name="valor"
                                label="Valor*"
                            />
                            <Select
                                label="Forma de pagamento*"
                                name="tipoPagamento"
                                classNamePrefix="react-select"
                                defaultValue={paymentOptions[1]}
                                options={paymentOptions}
                                isSearchable={false}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                            <Select
                                label="Tipo de despesa*"
                                name="tipoDespesa"
                                classNamePrefix="react-select"
                                defaultValue={expensesOptions[1]}
                                options={expensesOptions}
                                isSearchable={false}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
                        <Input name="fornecedor" label="Fornecedor" />
                        <TextArea name="descricao" label="Descrição*" />
                    </CreateInputForm>
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

export default AddOutputs;
