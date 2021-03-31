import React, { useRef } from 'react';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import FieldSet from '../../../../components/FieldSet';
import ButtonInput from '../../../../components/UnformFields/ButtonInput';

import { Container, PageTitle, ServiceHistoryContainer } from './styles';

const ServiceDetails: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    return (
        <Container>
            <PageTitle>
                <p>Imagens do serviço</p>
            </PageTitle>
            <FieldSet title="Antes" />
            <ServiceHistoryContainer ref={formRef} onSubmit={() => ''}>
                <ButtonInput name="d" label="adicionar imagem" />
            </ServiceHistoryContainer>
            <FieldSet title="Depois" />
            <ServiceHistoryContainer ref={formRef} onSubmit={() => ''}>
                <ButtonInput name="d" label="adicionar imagem" />
            </ServiceHistoryContainer>
        </Container>
    );
};

export default ServiceDetails;
