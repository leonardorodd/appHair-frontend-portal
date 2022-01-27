/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import Select, { OptionTypeBase } from 'react-select';
import FieldSet from '../../../components/FieldSet';
import MaskedInput from '../../../components/UnformFields/InputMaskd';
import CheckBox from '../../../components/UnformFields/CheckBox';
import {
    Container,
    PromotionHeaderContainer,
    CheckBoxContainer,
    ButtonContainer,
} from './styles';

interface IProductComission {
    descricao: string;
    qtd: string;
    qtdIdeal: string;
}

const Promotions: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const [selectedProducts, setSelectedProducts] = useState<
        Array<IProductComission>
    >([]);
    const [productsList, setProductsList] = useState<Array<IProductComission>>([
        {
            descricao: 'Produto1',
            qtd: '50',
            qtdIdeal: '150',
        },
        {
            descricao: 'Produto2',
            qtd: '50',
            qtdIdeal: '150',
        },
        {
            descricao: 'Produto3',
            qtd: '50',
            qtdIdeal: '150',
        },
    ]);

    return (
        <Container>
            <PromotionHeaderContainer>
                <h1>Sugestão de compras</h1>
                <div>
                    <div>
                        <FaSearch />
                        <input placeholder="Pesquisar produto" />
                    </div>
                </div>
            </PromotionHeaderContainer>
            <FieldSet title="Produtos em estoque mínimo">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Qtd</th>
                            <th>Qtd ideal</th>
                            <th>
                                <div />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList.map((product, index) => (
                            <tr>
                                <td>{product?.descricao}</td>
                                <td>{product?.qtd}</td>
                                <td>{product?.qtdIdeal}</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </FieldSet>
            <FieldSet title="Próximos de alta rotatividade em baixa quantidade">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Qtd</th>
                            <th>Qtd ideal</th>
                            <th>
                                <div />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList.map((product, index) => (
                            <tr>
                                <td>{product?.descricao}</td>
                                <td>{product?.qtd}</td>
                                <td>{product?.qtdIdeal}</td>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </FieldSet>
            {selectedProducts.length > 0 ? (
                <ButtonContainer>
                    <button className="fibre-button" type="submit" form="form">
                        Aplicar desconto
                    </button>
                </ButtonContainer>
            ) : (
                <div />
            )}
        </Container>
    );
};

export default Promotions;
