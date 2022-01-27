/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import Select, { OptionTypeBase } from 'react-select';
import { MdDelete } from 'react-icons/md';
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
    precoCusto: string;
    valorVenda: string;
    sugestaoVenda: string;
    novoValor: string;
}

const PromotionOptions = [
    { value: 1, label: '5%' },
    { value: 2, label: '10%' },
    { value: 2, label: '15%' },
    { value: 2, label: '20%' },
    { value: 2, label: '25%' },
    { value: 2, label: '30%' },
    { value: 2, label: '35%' },
    { value: 2, label: '40%' },
];
const Promotions: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const [selectedProducts, setSelectedProducts] = useState<
        Array<IProductComission>
    >([]);
    const [productsList, setProductsList] = useState<Array<IProductComission>>([
        {
            descricao: 'Produto1',
            qtd: '50',
            precoCusto: '150',
            valorVenda: '700',
            sugestaoVenda: '25%',
            novoValor: '1500',
        },
        {
            descricao: 'Produto2',
            qtd: '50',
            precoCusto: '150',
            valorVenda: '700',
            sugestaoVenda: '25%',
            novoValor: '1500',
        },
        {
            descricao: 'Produto3',
            qtd: '50',
            precoCusto: '150',
            valorVenda: '700',
            sugestaoVenda: '25%',
            novoValor: '1500',
        },
    ]);

    return (
        <Container>
            <PromotionHeaderContainer>
                <h1>Sugestão de promoção</h1>
                <div>
                    <div>
                        <FaSearch />
                        <input placeholder="Pesquisar produto" />
                    </div>
                </div>
            </PromotionHeaderContainer>
            <FieldSet title="Produtos parados no estoque">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>
                                <div />
                            </th>
                            <th>Descrição</th>
                            <th>Qtd</th>
                            <th>Preço de custo (R$)</th>
                            <th>Valor de venda (R$)</th>
                            <th>Sugestão de venda (%)</th>
                            <th>Novo valor de venda (R$)</th>
                            <th>
                                <div />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList.map((product, index) => (
                            <tr>
                                <td>
                                    <CheckBoxContainer onSubmit={() => ''}>
                                        <CheckBox
                                            name="SS"
                                            onChangeCallback={() => {
                                                if (
                                                    selectedProducts.includes(
                                                        product,
                                                    )
                                                ) {
                                                    const updatedProductsList = selectedProducts.filter(
                                                        (_, productIndex) =>
                                                            productIndex !==
                                                            index,
                                                    );

                                                    setSelectedProducts(
                                                        updatedProductsList,
                                                    );
                                                } else {
                                                    setSelectedProducts([
                                                        ...selectedProducts,
                                                        product,
                                                    ]);
                                                }
                                            }}
                                        />
                                    </CheckBoxContainer>
                                </td>
                                <td>{product?.descricao}</td>
                                <td>{product?.qtd}</td>
                                <td>{product?.precoCusto}</td>
                                <th>{product?.valorVenda}</th>
                                <th>{product?.sugestaoVenda}</th>
                                <th>{product?.novoValor}</th>
                                <td>
                                    <MdDelete onClick={() => ''} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </FieldSet>
            <FieldSet title="Próximos a data de vencimento">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>
                                <div />
                            </th>
                            <th>Descrição</th>
                            <th>Qtd</th>
                            <th>Preço de custo (R$)</th>
                            <th>Valor de venda (R$)</th>
                            <th>Sugestão de venda (%)</th>
                            <th>Novo valor de venda (R$)</th>
                            <th>
                                <div />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList.map((product, index) => (
                            <tr>
                                <td>
                                    <CheckBoxContainer onSubmit={() => ''}>
                                        <CheckBox
                                            name="SS"
                                            onChangeCallback={() => {
                                                if (
                                                    selectedProducts.includes(
                                                        product,
                                                    )
                                                ) {
                                                    const updatedProductsList = selectedProducts.filter(
                                                        (_, productIndex) =>
                                                            productIndex !==
                                                            index,
                                                    );

                                                    setSelectedProducts(
                                                        updatedProductsList,
                                                    );
                                                } else {
                                                    setSelectedProducts([
                                                        ...selectedProducts,
                                                        product,
                                                    ]);
                                                }
                                            }}
                                        />
                                    </CheckBoxContainer>
                                </td>
                                <td>{product?.descricao}</td>
                                <td>{product?.qtd}</td>
                                <td>{product?.precoCusto}</td>
                                <th>{product?.valorVenda}</th>
                                <th contentEditable>
                                    {product?.sugestaoVenda}
                                </th>
                                <th>{product?.novoValor}</th>
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
