import React from 'react';
import { Chart, Pie, Bar } from 'react-chartjs-2';
import { MdAttachMoney } from 'react-icons/md';
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
                    <Pie
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
                        <div>R$ 250,00</div>
                    </Card>
                    <Card>
                        <p>Semana</p>
                        <div>R$ 1250,00</div>
                    </Card>
                    <Card>
                        <p>Mês</p>
                        <div>R$ 5000,00</div>
                    </Card>
                </CardsContainer2>
            </ChartsContainer>
        </Container>
    );
};

export default Dashboard;
