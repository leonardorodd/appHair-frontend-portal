import React from 'react';
import { Table } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import AddInputs from './AddInputs';
import { Container, SearchContainer } from './styles';

const Inputs: React.FC = () => {
    const history = useHistory();

    return (
        <Container>
            <SearchContainer>
                <h1>Entradas, recebimentos e vouchers</h1>
                <div>
                    <AddInputs />
                    <div>
                        <input placeholder="Data, descrição ou valor" />
                        <button className="searchButton " type="button">
                            <span>Pesquisar</span>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </SearchContainer>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Valor (R$)</th>
                        <th>Forma de pagamento</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>06/05/2021</td>
                        <td>250,00</td>
                        <td>Cartão</td>
                        <td>Dia de beleza</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>06/05/2021</td>
                        <td>20,00</td>
                        <td>Dinheiro</td>
                        <td>Barba</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>06/05/2021</td>
                        <td>80,00</td>
                        <td>Cartão</td>
                        <td>Corte e alisamento</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Inputs;
