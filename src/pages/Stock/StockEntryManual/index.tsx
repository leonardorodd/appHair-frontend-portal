import React from 'react';

import { Container, StockHeaderContainer } from './styles';

const StockEntryManual: React.FC = () => {
    return <Container />;

    /* <Container>
            <StockHeaderContainer>
                <h1>Entrada de nota</h1>
            </StockHeaderContainer>
            <CreateInputForm
                id="form"
                onSubmit={handleCreateClientSubmit}
                ref={formRef}
            >
                <div className="twoFieldsGroup">
                    <Select
                        label="Fornecedor"
                        name="fornecedor"
                        classNamePrefix="react-select"
                        defaultValue={fornecedorOptions[1]}
                        options={fornecedorOptions}
                        blurInputOnSelect
                        openMenuOnFocus
                    />
                    <DatePicker label="Data da nota" name="data" />
                </div>
                <ConfigurePaymentForm onSubmit={() => ''} id="form2">
                    <div>
                        <Input
                            textTransform="lowercase"
                            name="qtd"
                            label="Descrição"
                        />
                        <div className="treeFieldsgroup">
                            <Select
                                label="Unidade"
                                name="unidade"
                                classNamePrefix="react-select"
                                defaultValue={unityOptions[1]}
                                options={unityOptions}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                            <Input
                                textTransform="lowercase"
                                name="qtd"
                                label="Qtd"
                            />
                            <MaskedInput
                                label="Valor unitário(R$)"
                                mask="R$ 99.999"
                                name="value"
                            />
                        </div>
                        <div>
                            <button type="button">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Und</th>
                                <th>Qtd</th>
                                <th>Valor unitário</th>
                            </tr>
                            <tr>
                                <td>Creme</td>
                                <th>ml</th>
                                <td>5</td>
                                <td>10,00</td>
                            </tr>
                            <tr>
                                <td>Creme</td>
                                <th>ml</th>
                                <td>5</td>
                                <td>10,00</td>
                            </tr>
                            <tr>
                                <td>Creme</td>
                                <th>ml</th>
                                <td>5</td>
                                <td>10,00</td>
                            </tr>
                            <tr>
                                <td>Creme</td>
                                <th>ml</th>
                                <td>5</td>
                                <td>10,00</td>
                            </tr>
                            <tr>
                                <td>Creme</td>
                                <th>ml</th>
                                <td>5</td>
                                <td>10,00</td>
                            </tr>
                        </thead>
                        <tbody />
                    </Table>
                </ConfigurePaymentForm>
            </CreateInputForm>
        </Container> */
};

export default StockEntryManual;
