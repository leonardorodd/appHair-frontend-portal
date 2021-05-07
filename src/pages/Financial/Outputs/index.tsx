import React from 'react';
import { Table } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import AddOutputs from './AddOutputs';
import { Container, SearchContainer } from './styles';

const Inputs: React.FC = () => {
    const history = useHistory();

    return (
        <Container>
            <SearchContainer>
                <h1>Saídas, retiradas e vales</h1>
                <div>
                    <AddOutputs />
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
                        <td>Dinheiro</td>
                        <td>Energia</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>06/05/2021</td>
                        <td>1.500,00</td>
                        <td>Dinheiro</td>
                        <td>Aluguel</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>06/05/2021</td>
                        <td>230,00</td>
                        <td>Dinheiro</td>
                        <td>Internet</td>
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
