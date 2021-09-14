/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-curly-newline */
import { Table } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import { RiFileUploadLine } from 'react-icons/ri';
import parser from 'fast-xml-parser';

import StockEntry from './StockEntry';
import { Container, StockHeaderContainer, UploadXML } from './styles';

const Management: React.FC = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const buttonRef = useRef(null);

    const options = {
        attributeNamePrefix: '',
        ignoreAttributes: false,
        ignoreNameSpace: false,
        allowBooleanAttributes: false,
        parseNodeValue: true,
        parseAttributeValue: false,
        trimValues: true,
        cdataTagName: '__cdata',
        cdataPositionChar: '\\c',
        parseTrueNumberOnly: false,
        arrayMode: false,
        stopNodes: ['parse-me-as-string'],
    };

    function handleUploadXMLSubmit(event: React.ChangeEvent<HTMLInputElement>) {
        setLoading(true);

        if (event.target.files) {
            const file = event.target.files[0];

            fetch(URL.createObjectURL(file))
                .then(response => response.text())
                .then(str => {
                    setLoading(false);
                    history.push({
                        pathname: '/stock/new-entry',
                        state: parser.parse(str, options),
                    });
                })
                .catch(error => console.log('error'));

            /*  fetch(URL.createObjectURL(file))
                .then(response => response.text())
                .then(response => {
                    parseString(response, (err, result) => {
                        console.log(response);
                    });
                })
                .catch(err => {
                    console.log('fetch', err);
                }); */

            /* const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file, 'utf-8');
            reader.onload = () => {
                parseString(reader.result as string, (err, result) => {
                    console.log(result);
                });
            }; */
            /*  axios
                .get(URL.createObjectURL(event.target.files[0]), {
                    headers: {
                        'Content-Type': 'application/xml; charset=utf-8',
                    },
                })
                .then(res => {
                    console.log(res.data);
                }); */
        }
    }

    return (
        <Container>
            <StockHeaderContainer>
                <h1>Estoque</h1>
                <div>
                    <div>
                        <UploadXML loading={loading}>
                            <label htmlFor="selecao-arquivo" ref={buttonRef}>
                                {loading ? (
                                    <FaSpinner color="#FFF" size={16} />
                                ) : (
                                    <RiFileUploadLine size={16} />
                                )}
                                <div>Upload XML</div>
                                <input
                                    id="selecao-arquivo"
                                    type="file"
                                    disabled={loading}
                                    accept="text/xml"
                                    onChange={event =>
                                        handleUploadXMLSubmit(event)
                                    }
                                />
                            </label>
                        </UploadXML>
                        <StockEntry />
                        {/*  <button
                            type="button"
                            onClick={() => history.push('/stock/new-entry')}
                        >
                            Importar XML
                        </button> */}
                    </div>
                    <div>
                        <FaSearch />
                        <input placeholder="Busca por nome, fornecedor" />
                    </div>
                </div>
            </StockHeaderContainer>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Fornecedor</th>
                        <th>Und</th>
                        <th>Qtd</th>
                        <th>Valor unitário</th>
                    </tr>
                    <tr>
                        <td>Creme</td>
                        <td>Fulano</td>
                        <th>ml</th>
                        <td>5</td>
                        <td>10,00</td>
                    </tr>
                    <tr>
                        <td>Creme</td>
                        <td>Fulano</td>
                        <th>ml</th>
                        <td>5</td>
                        <td>10,00</td>
                    </tr>
                    <tr>
                        <td>Creme</td>
                        <td>Fulano</td>
                        <th>ml</th>
                        <td>5</td>
                        <td>10,00</td>
                    </tr>
                    <tr>
                        <td>Creme</td>
                        <td>Fulano</td>
                        <th>ml</th>
                        <td>5</td>
                        <td>10,00</td>
                    </tr>
                    <tr>
                        <td>Creme</td>
                        <td>Fulano</td>
                        <th>ml</th>
                        <td>5</td>
                        <td>10,00</td>
                    </tr>
                </thead>
                <tbody />
            </Table>
        </Container>
    );
};

export default Management;
