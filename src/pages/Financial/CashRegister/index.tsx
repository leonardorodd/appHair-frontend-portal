/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Chart, Pie, Bar, Doughnut } from 'react-chartjs-2';
import { MdAttachMoney, MdTimeline, MdSystemUpdateAlt,MdSort, MdDelete } from 'react-icons/md';
import { VscFilePdf } from 'react-icons/vsc';
import { IoIosCalculator } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import { Table } from 'react-bootstrap';
import Checkbox from '../../../components/UnformFields/CheckBox';

import {
    Container,
    Section1,
    Section2,
    PieChart,
    BarChart,
    ChartsContainer,
    CardsContainer,
    CardsContainer2,
    Card2,
    Card3,
    Card,
    Title,
} from './styles';

import ViewComandaModal from './ViewComanda';


const CashRegister: React.FC = () => {
    const [date, setDate] = useState(new Date());

    const pieData = {
        labels: ['Agendamentos concluídos', 'Agendamentos cancelados'],
        datasets: [
            {
                label: '# of Votes',
                data: [150, 20],
                backgroundColor: ['#fd5c0e', '#fd8b53'],
                borderColor: ['#fff', '#fff'],
            },
        ],
    };

    const barData = {
        labels: [
            'Hoje',
        ],
        /*  datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                barOptions: {},
            },
        ], */
        datasets: [
            {
                label: 'Dinheiro',
                data: [1800],
                backgroundColor: '#fd5c0e',
            },
            {
                label: 'Crédito',
                data: [650],
                backgroundColor: '#fd8b53',
            },
            {
                label: 'Débito',
                data: [350],
                backgroundColor: '#fdab82',
            },
            {
                label: 'PIX',
                data: [650],
                backgroundColor: '#fdc3a5',
            },
            {
                label: 'Voucher',
                data: [350],
                backgroundColor: '#fddccb',
            }

        ],
    };

    const barOptions = {
        maintainAspectRatio: true,
        responsive: true,
/*         barPercentage: 0.7,
 */        barThickness: 90,
        scales: {
            y: {
                grid: {
                    color: 'white',
                    borderColor: 'white',
                    tickColor: 'white',
                },
                ticks: {
                    callback(value: string) {
                        return `R$ ${value}`;
                    },
                    beginAtZero: true,
                },
            },
            x: {
                grid: {
                    color: 'white',
                    borderColor: 'white',
                    tickColor: 'white',
                },
            },
        },
    };

    const pieOptions = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            /*  title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
            }, */
        },
    };

    return (
        <Container>
            <h1>Caixa do dia - Aberto</h1>
            <div>
                <Title>
                    Data do caixa
                </Title>
                <DatePicker
                    selected={date}
                    onChange={(selecteDate: Date) =>
                    selecteDate && setDate(selecteDate)}
                />
            </div>
            <div>
                <Section1>
                    <Title>Movimentações (valores)</Title>
                    <div>
                        <Card2>
                            <p>Dinheiro</p>
                            <div>
                                <p>R$ 250,00</p>
                                <MdAttachMoney />
                            </div>
                        </Card2>
                        <Card2>
                            <p>Crédito</p>
                            <div>
                                <p>R$ 1250,00</p>
                                <MdAttachMoney />
                            </div>
                        </Card2>
                        <Card2>
                            <p>Débito</p>
                            <div>
                                <p>R$ 5000,00</p>
                                <MdAttachMoney />
                            </div>
                        </Card2>
                        <Card2>
                            <p>PIX</p>
                            <div>
                                <p>R$ 5000,00</p>
                                <MdAttachMoney />
                            </div>
                        </Card2>
                        <Card2>
                            <p>Voucher</p>
                            <div>
                                <p>R$ 5000,00</p>
                                <MdAttachMoney />
                            </div>
                        </Card2>
                    </div>
                    <Title>
                        Movimentações (proporção)
                    </Title>
                    <Bar type="" data={barData} width={340} height={80} options={barOptions} />
                    <Title>
                        Comandas do dia
                    </Title>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Número da comanda</th>
                                <th>Cliente</th>
                                <th>Status</th>
                                <th>Valor Pago</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1465</td>
                                <td>Marcia</td>
                                <td>Aberta</td>
                                <td>R$ 50,00</td>
                                <td>
                                    <div>
                                        <VscFilePdf />
                                        <ViewComandaModal />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Title>
                        Entradas x Saídas
                    </Title>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Valor (R$)</th>
                                <th>Forma de pagamento</th>
                                <th>Descrição</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>06/05/2021</td>
                                <td>250,00</td>
                                <td>Cartão</td>
                                <td>Dia de beleza</td>
                                <td>Entrada</td>
                            </tr>
                            <tr>
                                <td>06/05/2021</td>
                                <td>20,00</td>
                                <td>Dinheiro</td>
                                <td>Produto de limpeza</td>
                                <td>Saída</td>
                            </tr>
                            <tr>
                                <td>06/05/2021</td>
                                <td>80,00</td>
                                <td>Cartão</td>
                                <td>Corte e alisamento</td>
                                <td>Entrada</td>
                            </tr>
                        </tbody>
                    </Table>
                </Section1>
                <Section2>
                    <Title>Agendamentos (concluídos x cancelados)</Title>
                    <PieChart>
                        <Doughnut
                            height={100}
                            width={100}
                            type=""
                            data={pieData}
                            options={pieOptions}
                        />
                    </PieChart>
                    <div>
                        <Title>Agendamentos (números)</Title>
                        <Card3>
                            <p>Total de agendamentos</p>
                            <div>
                                <p>25</p>
                                <MdTimeline />
                            </div>
                        </Card3>
                        <Card3>
                            <p>Agendamentos concluídos</p>
                            <div>
                                <p>20</p>
                                <MdTimeline />
                            </div>
                        </Card3>
                        <Card3>
                            <p>Agendamentos cancelados</p>
                            <div>
                                <p>5</p>
                                <MdTimeline />
                            </div>
                        </Card3>
                    </div>
                </Section2>
            </div>
            <div>
                <button
                    className="fibre-button fibre-button--cancel"
                    type="button"
                    onClick={()=> ""}
                >
                    Gerar relatório do dia
                    {/*                     <IoIosCalculator /> */}
                </button>
                <button
                    className="fibre-button fibre-button--cancel"
                    type="button"
                    onClick={()=> ""}
                >
                    Fechar caixa
                    {/*                     <IoIosCalculator /> */}
                </button>
            </div>
        </Container>
    );
};

export default CashRegister;
