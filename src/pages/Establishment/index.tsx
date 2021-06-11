import React, { useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import { Table } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import brasilStatesAndCities from '../../utils/brazilianStates.json';
import FieldSet from '../../components/FieldSet';
import MaskedInput from '../../components/UnformFields/InputMaskd';
import Select from '../../components/UnformFields/Select';
import apiClient from '../../services/apiClient';
import { cpfMask, cnpjMask } from '../../utils/masks';
import CardOperator from './CardOperator';
import Expenses from './Expenses';
import Campaign from './Campaign';
import Input from '../../components/UnformFields/Input';
import CheckBox from '../../components/UnformFields/CheckBox';
import TextArea from '../../components/UnformFields/TextArea';

import {
    Container,
    PageTitle,
    PageFooter,
    CreateEstablismentForm,
    CustomFieldSet,
    WeekScheduleContainer,
    DayScheduleItem,
} from './styles';

export interface IFormData {
    nome: string;
    apelido: string;
    dataDeNascimento: string;
    sexo: string;
    email: string;
    numeroCPFouCNPJ: string;
    RG?: string;
    avatarImage?: string;
    whatsapp: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
    porcentagemDescontoProdutos?: string;
    porcentagemDescontoServicos?: string;
    indocadoPor?: string;
    idArtista1?: string;
    idArtista2?: string;
    coloracaoCabelo?: string;
    tipoDePele?: string;
    tipoDeUnha?: string;
}

interface IAddressapi {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
}

interface SelectOption {
    value: string;
    label: string;
}
const Establishment: React.FC = () => {
    const handleCreateEstablishmentSubmit: SubmitHandler<IFormData> = async data => {
        console.log(data);
    };

    const formRef = useRef<FormHandles>(null);
    const [tipoPessoa, setTipoPessoa] = useState('');
    const [cepLoading, setCepLoading] = useState<boolean>(false);
    const [currentUf, setCurrentUf] = useState<string | undefined>();
    const [currentCities, setCurrentCities] = useState<Array<SelectOption>>([]);

    const states = brasilStatesAndCities.estados.map(elem => ({
        value: elem.nome,
        label: elem.nome,
        sigla: elem.sigla,
    }));

    function getAddressInfo(cep: string) {
        setCepLoading(true);
        apiClient
            .get<IAddressapi>(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then(response => {
                setCurrentUf(response.data.state);
                formRef.current?.setFieldError('address.cep', '');
                formRef.current?.setData({
                    address: {
                        bairro: response.data.neighborhood,
                        logradouro: response.data.street,
                    },
                });
            })
            .catch(error => {
                let errorMessage = 'O preenchimento automático está offline';

                if (error.status === 404) {
                    errorMessage = 'CEP não encontrado!';
                }

                formRef.current?.setData({
                    address: {
                        bairro: '',
                        logradouro: '',
                    },
                });

                formRef.current?.setFieldError('address.cep', errorMessage);
            })
            .finally(() => setCepLoading(false));
    }

    const data = [{ id: 1, nome: 'Aluguel', ano: '1982', vencimento: 'Dia 5' }];
    const columns = [
        {
            name: 'Nome',
            selector: 'nome',
            sortable: true,
        },
        {
            name: 'Ano',
            selector: 'ano',
            sortable: true,
            right: true,
        },
        {
            name: 'Vencimento',
            selector: 'vencimento',
            sortable: true,
            right: true,
        },
        {
            name: 'Vencimento',
            selector: 'vencimento',
            sortable: true,
            right: true,
        },
    ];

    return (
        <Container>
            <PageTitle>
                <p>Estabelecimento</p>
            </PageTitle>
            <CreateEstablismentForm
                id="form"
                onSubmit={handleCreateEstablishmentSubmit}
                ref={formRef}
            >
                <FieldSet title="Informações Básicas">
                    <Input name="razaoSocial" label="Razão social*" />
                    <div className="twoFieldsGroup">
                        <Input
                            name="numeroCPFouCNPJ"
                            label="CPF/CNPJ*"
                            value={
                                tipoPessoa.length > 14
                                    ? cnpjMask(tipoPessoa)
                                    : cpfMask(tipoPessoa)
                            }
                            onChange={e => setTipoPessoa(e.target.value)}
                        />
                        <Input name="email" label="E-mail" />
                    </div>

                    <div className="treeFieldsgroup">
                        <Input name="contato" label="Contato" />
                        <MaskedInput
                            mask="(99) 9999-9999"
                            name="telefone"
                            label="Telefone"
                        />
                        <MaskedInput
                            mask="(99) 9 9999-9999"
                            name="celular"
                            label="Celular"
                        />
                    </div>
                    <div className="twoFieldsGroup">
                        <TextArea
                            name="descricao"
                            label="Descrição do estabelecimento"
                        />
                        <CustomFieldSet>
                            <MaskedInput
                                mask="999%"
                                name="celular"
                                label="Valor em percentual"
                            />
                            <span>
                                É a remuneração paga pela prestação de serviços
                                de gestão administrativa.
                            </span>
                        </CustomFieldSet>
                    </div>
                </FieldSet>
                <FieldSet title="Horário de funcionamento">
                    <DayScheduleItem>
                        <CheckBox
                            name="unico"
                            label="Informar um horário único"
                        />
                        <p>Horário</p>
                        <div>
                            <MaskedInput mask="99:99" name="value" />
                            às
                            <MaskedInput mask="99:99" name="value" />
                        </div>
                        <CheckBox name="sabado" label="Marcar todos os dias" />
                    </DayScheduleItem>
                    <WeekScheduleContainer>
                        <DayScheduleItem>
                            <CheckBox name="domingo" label="Domingo" />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox name="segunda" label="Segunda" />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox name="terca" label="Terça" />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox name="quarta" label="Quarta" />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox name="quinta" label="Quinta" />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox name="sexta" label="Sexta" />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox name="sabado" label="Sábado" />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                    </WeekScheduleContainer>
                </FieldSet>
                <FieldSet title="Endereço">
                    <Scope path="address">
                        <div className="fourFieldsGroup">
                            <MaskedInput
                                mask="99999-999"
                                name="cep"
                                showLoadingIcon
                                loading={cepLoading}
                                label="CEP"
                                disabled={cepLoading}
                                onChangeCallback={event => {
                                    if (
                                        RegExp(/^\d{5}-\d{3}$/g).test(
                                            event.target.value,
                                        )
                                    ) {
                                        getAddressInfo(event.target.value);
                                    }
                                }}
                            />
                            <Input
                                name="logradouro"
                                label="Logradouro"
                                disabled={cepLoading}
                            />
                            <Input name="numero" label="Número" />
                            <Input
                                name="bairro"
                                label="Bairro"
                                disabled={cepLoading}
                            />
                        </div>
                        <div className="treeFieldsgroup">
                            <Input name="complemento" label="Complemento" />
                            <Select
                                label="Estado"
                                name="estado"
                                classNamePrefix="react-select"
                                defaultValue={{
                                    label: 'Selecione',
                                    value: 0,
                                }}
                                onChange={value => {
                                    setCurrentUf(value?.value);
                                    /*  formRef.current?.clearField(
                                                        'address.cidade',
                                                    ); */
                                }}
                                options={states}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                            <Select
                                name="cidade"
                                label="Cidade"
                                classNamePrefix="react-select"
                                defaultValue={{
                                    label: 'Selecione',
                                    value: 0,
                                }}
                                options={currentCities}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
                    </Scope>
                </FieldSet>
                <FieldSet title="Operação com cartão">
                    <CardOperator />
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Administradora</th>
                                <th>Bandeira</th>
                                <th>Operação</th>
                                <th>Taxa (%) </th>
                                <th>Taxa de antecipação (%)</th>
                                <th>Qtd dias a compensar</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cielo</td>
                                <td>Mastercard</td>
                                <td>Crédito</td>
                                <td>10%</td>
                                <td>10%</td>
                                <td>30</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                            <tr>
                                <td>Cielo</td>
                                <td>Mastercard</td>
                                <td>Crédito</td>
                                <td>10%</td>
                                <td>10%</td>
                                <td>30</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                            <tr>
                                <td>Cielo</td>
                                <td>Mastercard</td>
                                <td>Crédito</td>
                                <td>10%</td>
                                <td>10%</td>
                                <td>30</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </FieldSet>
                <FieldSet title="Despesas fixas">
                    <Expenses />
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor (R$)</th>
                                <th>Vencimento</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aluguel</td>
                                <td>800,00</td>
                                <td>Dia 5</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                            <tr>
                                <td>Energia</td>
                                <td>350,00</td>
                                <td>Dia 12</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                            <tr>
                                <td>Água</td>
                                <td>200,00</td>
                                <td>Dia 10</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </FieldSet>
                <FieldSet title="Campanhas ativas">
                    <Campaign />
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Data inicial</th>
                                <th>Data final</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Combo cabelo e unhas</td>
                                <td>15/04/2021</td>
                                <td>30/04/2021</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                            <tr>
                                <td>Combo barba e cabelo</td>
                                <td>15/04/2021</td>
                                <td>30/04/2021</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                            <tr>
                                <td>Combo esfoliação</td>
                                <td>15/04/2021</td>
                                <td>30/04/2021</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </FieldSet>
                <DataTable
                    title="Despesas Fixas"
                    columns={columns}
                    data={data}
                    pagination
                />
            </CreateEstablismentForm>
            <PageFooter>
                <button
                    className="fibre-button fibre-button--cancel"
                    type="button"
                    onClick={() => ''}
                >
                    Cancelar
                </button>
                <button
                    className="fibre-button fibre-button--cancel"
                    type="submit"
                    form="form"
                >
                    Salvar
                </button>
            </PageFooter>
        </Container>
    );
};

export default Establishment;
