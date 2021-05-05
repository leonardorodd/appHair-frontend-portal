import React from 'react';
import { Chart, Pie, Bar, Doughnut } from 'react-chartjs-2';
import { MdAttachMoney, MdTimeline } from 'react-icons/md';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import {
    Container,
    PieChart,
    BarChart,
    ChartsContainer,
    CardsContainer,
    CardsContainer2,
    Card,
} from './styles';

const Dashboard: React.FC = () => {
    const pieData = {
        labels: ['Despesas fixas', 'Despesas eventuais'],
        datasets: [
            {
                label: '# of Votes',
                data: [800, 1250],
                backgroundColor: ['#fd5c0e', '#fd7d3e'],
                borderColor: ['#fff', '#fff'],
            },
        ],
    };

    const barData = {
        labels: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
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
                label: 'Receita',
                data: [800, 1250, 1300, 1200],
                backgroundColor: '#fd5c0e',
            },
            {
                label: 'Despesa',
                data: [350, 780, 850, 900],
                backgroundColor: '#fd7d3e',
            },
        ],
    };

    const barOptions = {
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
        responsive: true,
    };

    const pieOptions = {
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
            <h1>Dashboard</h1>
            <span>Indicadores financeiros</span>
            <CardsContainer>
                <Card>
                    <p>Total de receita no mês</p>
                    <div>
                        <p>R$ 1650,00</p>
                        <MdAttachMoney />
                    </div>
                </Card>
                <Card>
                    <p>Total de comissões no mês</p>
                    <div>
                        <p>R$ 350,00</p>
                        <MdAttachMoney />
                    </div>
                </Card>
                <Card>
                    <p>Total de despesas no mês</p>
                    <div>
                        <p>R$ 550,00</p>
                        <MdAttachMoney />
                    </div>
                </Card>
                <Card>
                    <p>Resultados do mês</p>
                    <div>
                        <p>R$ 650,00</p>
                        <MdAttachMoney />
                    </div>
                </Card>
                <Card>
                    <p>Receita anual</p>
                    <div>
                        <p>R$ 4550,00</p>
                        <MdAttachMoney />
                    </div>
                </Card>
            </CardsContainer>
            <ChartsContainer>
                <BarChart>
                    <div className="header">
                        <span className="title">
                            Análise anual (receita x despesa)
                        </span>
                    </div>
                    <Bar type="" data={barData} options={barOptions} />
                </BarChart>
                <PieChart>
                    <div className="header">
                        <span className="title">Despesas do mês</span>
                    </div>
                    <Doughnut
                        height={100}
                        width={100}
                        type=""
                        data={pieData}
                        options={pieOptions}
                    />
                </PieChart>
                <CardsContainer2>
                    <span>Previsão de ganhos</span>
                    <Card>
                        <p>Hoje</p>
                        <div>
                            <p>R$ 250,00</p>
                            <MdTimeline />
                        </div>
                    </Card>
                    <Card>
                        <p>Semana</p>
                        <div>
                            <p>R$ 1250,00</p>
                            <MdTimeline />
                        </div>
                    </Card>
                    <Card>
                        <p>Mês</p>
                        <div>
                            <p>R$ 5000,00</p>
                            <MdTimeline />
                        </div>
                    </Card>
                </CardsContainer2>
            </ChartsContainer>
        </Container>
    );
};

export default Dashboard;
