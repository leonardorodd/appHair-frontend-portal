import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    const options = [
        {
            value: 'teste',
            label: 'teste',
        },
        {
            value: 'teste2',
            label: 'teste2',
        },
        {
            value: 'teste3',
            label: 'teste3',
        },
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
};

export default Dashboard;
