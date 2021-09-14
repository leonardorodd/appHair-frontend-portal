/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import FieldSet from '../../../components/FieldSet';
import AddOutputs from './AddOutputs';
import PaymentDelete from './PaymentDelete';
import PaymentEdit from './EditOutputs';
import CheckBox from '../../../components/UnformFields/CheckBox';

import {
    Container,
    PayableResume,
    ResumeItem,
    PaymentHeaderContainer,
} from './styles';

interface IPayment {
    date: string;
    credor: string;
    valor: string;
    descricao: string;
    status: 'Pago' | 'Pendente' | 'Em atraso' | 'Parcial';
}

const searchTypeOptions = [
    { value: 1, label: 'Termo' },
    { value: 2, label: 'Período' },
];

const Inputs: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [paymentSearchTerm, setPaymentSearchTerm] = useState<string | null>(
        null,
    );
    const [searchType, setSearchType] = useState(searchTypeOptions[0]);
    const [paymentsList, setPaymentsList] = useState<Array<IPayment>>([
        {
            date: '06/05/2021',
            credor: 'ENEL',
            valor: '250,00',
            descricao: 'Energia',
            status: 'Pago',
        },
        {
            date: '06/08/2021',
            credor: 'SANEAGO',
            valor: '250,00',
            descricao: 'Água',
            status: 'Pendente',
        },
        {
            date: '09/05/2021',
            credor: 'ENEL',
            valor: '250,00',
            descricao: 'Insumos',
            status: 'Em atraso',
        },
        {
            date: '09/05/2021',
            credor: 'ENEL',
            valor: '250,00',
            descricao: 'Insumos',
            status: 'Parcial',
        },
        {
            date: '09/05/2021',
            credor: 'ENEL',
            valor: '250,00',
            descricao: 'Insumos',
            status: 'Parcial',
        },
    ]);

    return (
        <Container>
            <PaymentHeaderContainer>
                <h1>Contas a pagar</h1>
                <div>
                    <AddOutputs />
                    <div>
                        <div>
                            <strong>Pesquisar por:</strong>
                            <Select
                                label="Tipo"
                                classNamePrefix="react-select"
                                defaultValue={searchTypeOptions[0]}
                                options={searchTypeOptions}
                                onChange={value =>
                                    value && setSearchType(value)
                                }
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
                        {searchType.value === 1 ? (
                            <div>
                                <FaSearch />
                                <input
                                    placeholder="Data, descrição ou credor"
                                    onChange={event =>
                                        setPaymentSearchTerm(event.target.value)
                                    }
                                />
                            </div>
                        ) : (
                            <div>
                                <strong>Inicio:</strong>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(selectedDate: Date) =>
                                        selectedDate &&
                                        setStartDate(selectedDate)
                                    }
                                />
                                <strong>Fim:</strong>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(selectedDate: Date) =>
                                        selectedDate && setEndDate(selectedDate)
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
            </PaymentHeaderContainer>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Data do vencimento</th>
                        <th>Credor</th>
                        <th>Valor (R$)</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentSearchTerm !== null && paymentSearchTerm !== ''
                        ? paymentsList
                              .filter(payment => {
                                  return Object.values(payment).some(value =>
                                      value
                                          .toLocaleUpperCase()
                                          .startsWith(
                                              paymentSearchTerm.toLocaleUpperCase(),
                                          ),
                                  );
                              })
                              .map((payment, index) => (
                                  <tr>
                                      <td>{payment.date}</td>
                                      <td>{payment.credor}</td>
                                      <td>{payment.valor}</td>
                                      <td>{payment.descricao}</td>
                                      <th>{payment.status}</th>
                                      <td>
                                          {/* <MdDelete
                                                  onClick={() => {
                                                      setPaymentsList(
                                                          paymentsList.filter(
                                                              (
                                                                  _,
                                                                  clientIndex,
                                                              ) =>
                                                                  clientIndex !==
                                                                  index,
                                                          ),
                                                      );
                                                  }}
                                              /> */}
                                      </td>
                                  </tr>
                              ))
                        : paymentsList.map((payment, index) => (
                              <tr>
                                  <td>{payment.date}</td>
                                  <td>{payment.credor}</td>
                                  <td>{payment.valor}</td>
                                  <td>{payment.descricao}</td>
                                  <th>{payment.status}</th>
                                  <td>
                                      <div>
                                          {' '}
                                          {/*    <MdDelete
                                              onClick={() => {
                                                  setPaymentsList(
                                                      paymentsList.filter(
                                                          (_, clientIndex) =>
                                                              clientIndex !==
                                                              index,
                                                      ),
                                                  );
                                              }}
                                          /> */}
                                          <PaymentDelete />
                                          <PaymentEdit />
                                      </div>
                                  </td>
                              </tr>
                          ))}
                </tbody>
            </Table>
            {/*  <PayableResume>
                <ResumeItem>
                    <strong>Pagas (R$):</strong>
                    <p>2.502,95</p>
                    <strong>A Pagar (R$):</strong>
                    <p>1.500,00</p>
                    <strong>Vencidas (R$):</strong>
                    <p>500,00</p>
                </ResumeItem>
            </PayableResume> */}
        </Container>
    );
};

export default Inputs;
