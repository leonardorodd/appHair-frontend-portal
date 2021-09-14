/* eslint-disable react/jsx-curly-newline */
import React, { useRef, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import { Table } from 'react-bootstrap';
import { cpfMask, cnpjMask } from '../../../utils/masks';
import Input from '../../../components/UnformFields/Input';
import FieldSet from '../../../components/FieldSet';
import Select from '../../../components/UnformFields/Select';
import DatePicker from '../../../components/UnformFields/DatePicker';
import brasilStatesAndCities from '../../../utils/brazilianStates.json';
import { Container, StockHeaderContainer, CreateNoteForm } from './styles';

interface IStateProps {
    sigla: string;
    label: string;
    value: string;
}

export interface INFItem {
    detalhes: string;
}

interface INFProps {
    dataEmissao: string;
    numeroNF: string;
    serie: string;
    chaveAcesso: string;
    natureza: string;
    fornecedor: string;
    cnpjFornecedor: string;
    destinatario: string;
    cnpjOrCpfDestinario: string;
    entregador: string;
    cnpjEntregador: string;
    modFrete: number;
    impostos: {
        vTotTrib: string;
        vTotNF: string;
        vProd: string;
        vFrete: string;
        vBC: string;
        vICMS: string;
        vBCST: string;
        vST: string;
        vSeg: string;
        vDesc: string;
        vOutro: string;
        vIPI: string;
    };
    items: INFItem[];
}

const type = [
    { value: 1, label: 'Entrada' },
    { value: 2, label: 'Saída' },
];

const providers = [
    { value: 1, label: 'Fulano' },
    { value: 2, label: 'Beltrano' },
    { value: 3, label: 'Ciclano' },
];

const naturezaOptions = [
    { value: 1, label: 'Venda de mercardoria' },
    { value: 2, label: 'Compra de mercadoria' },
    { value: 3, label: 'Devolução' },
];

const freteOptions = [
    { value: 1, label: 'Remetente' },
    { value: 2, label: 'Destinatário' },
];

const ufsList = brasilStatesAndCities.estados.map(uf => ({
    sigla: uf.sigla,
    label: `${uf.sigla} - ${uf.nome}`,
    value: uf.nome,
}));

const StockEntryXML: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const location = useLocation();
    const [tipoPessoa, setTipoPessoa] = useState('');
    const [currentState, setCurrentState] = useState<null | string>(null);
    const [nfData, setNFData] = useState<INFProps>();

    useEffect(() => {
        const data = location.state as any;
        console.log(data);
        setNFData({
            dataEmissao: data.nfeProc.NFe.infNFe.ide.dhEmi,
            numeroNF: data.nfeProc.NFe.infNFe.ide.nNF,
            serie: data.nfeProc.NFe.infNFe.ide.serie,
            chaveAcesso: data.nfeProc.NFe.infNFe.Id,
            natureza: data.nfeProc.NFe.infNFe.ide.natOp,
            fornecedor: data.nfeProc.NFe.infNFe.emit.xNome,
            cnpjFornecedor: data.nfeProc.NFe.infNFe.emit.CNPJ,
            destinatario: data.nfeProc.NFe.infNFe.dest.xNome || '',
            cnpjOrCpfDestinario:
                data.nfeProc.NFe.infNFe.dest.CNPJ ||
                data.nfeProc.NFe.infNFe.dest.CPF,
            entregador:
                (data.nfeProc.NFe.infNFe.transp.transporta &&
                    data.nfeProc.NFe.infNFe.transp.transporta.xNome) ||
                '',
            cnpjEntregador:
                (data.nfeProc.NFe.infNFe.transp.transporta &&
                    data.nfeProc.NFe.infNFe.transp.transporta.CNPJ) ||
                '',
            modFrete: data.nfeProc.NFe.infNFe.transp.modFrete,
            impostos: {
                vTotTrib: data.nfeProc.NFe.infNFe.total.ICMSTot.vTotTrib,
                vTotNF: data.nfeProc.NFe.infNFe.total.ICMSTot.vNF,
                vProd: data.nfeProc.NFe.infNFe.total.ICMSTot.vProd,
                vFrete: data.nfeProc.NFe.infNFe.total.ICMSTot.vFrete,
                vBC: data.nfeProc.NFe.infNFe.total.ICMSTot.vBC,
                vICMS: data.nfeProc.NFe.infNFe.total.ICMSTot.vICMS,
                vBCST: data.nfeProc.NFe.infNFe.total.ICMSTot.vBCST,
                vST: data.nfeProc.NFe.infNFe.total.ICMSTot.vST,
                vSeg: data.nfeProc.NFe.infNFe.total.ICMSTot.vSeg,
                vDesc: data.nfeProc.NFe.infNFe.total.ICMSTot.vDesc,
                vOutro: data.nfeProc.NFe.infNFe.total.ICMSTot.vOutro,
                vIPI: data.nfeProc.NFe.infNFe.total.ICMSTot.vIPI,
            },
            items: data.nfeProc.NFe.infNFe.det,
        });
    }, [location]);

    const handleCreateNoteSubmit = () => {
        return '';
    };

    const citiesList = brasilStatesAndCities.estados
        .find(elem => elem.sigla === currentState)
        ?.cidades.map(elem => ({
            value: elem,
            label: elem,
        }));

    return (
        <Container>
            <StockHeaderContainer>
                <h1>Entrada de nota</h1>
            </StockHeaderContainer>
            {nfData && (
                <CreateNoteForm
                    id="form"
                    onSubmit={handleCreateNoteSubmit}
                    ref={formRef}
                >
                    <FieldSet title="Identificação da nota fiscal">
                        <div className="treeFieldsGroup">
                            {/*  <DatePicker
                            label="Data de emissão"
                            name="dataDeEmissao"
                            initialDate={nfData}
                        /> */}
                            <Input
                                name="data"
                                label="Data de emissão"
                                value={new Date(
                                    nfData.dataEmissao,
                                ).toLocaleDateString('pt-br')}
                                disabled
                            />
                            <Input
                                name="numero"
                                label="Número"
                                value={nfData.numeroNF}
                                disabled
                            />
                            <Input
                                name="serie"
                                label="Série"
                                value={nfData.serie}
                                disabled
                            />
                        </div>
                        <div className="twoFieldsGroup">
                            <Input
                                name="chaveDeAcesso"
                                label="Chave de acesso"
                                value={nfData.chaveAcesso}
                                disabled
                            />
                            <Input
                                name="Natureza"
                                label="Natureza da operação"
                                value={nfData.natureza}
                                disabled
                            />
                        </div>
                    </FieldSet>
                    <div>
                        <FieldSet title="Emitente">
                            <div className="twoFieldsGroup">
                                <Input
                                    name="razao"
                                    label="Razão social"
                                    value={nfData.fornecedor}
                                    disabled
                                />
                                <Input
                                    name="CNPJ"
                                    label="CNPJ"
                                    value={nfData.cnpjFornecedor}
                                    disabled
                                />
                            </div>
                        </FieldSet>
                        <FieldSet title="Destinatário">
                            <div className="twoFieldsGroup">
                                <Input
                                    name="razao"
                                    label="Razão social"
                                    value={nfData.destinatario}
                                    disabled
                                />
                                <Input
                                    name="CNPJ"
                                    label="CNPJ/CPF"
                                    value={nfData.cnpjOrCpfDestinario}
                                    disabled
                                />
                            </div>
                        </FieldSet>
                    </div>
                    <FieldSet title="Transportador">
                        <div className="treeFieldsGroup">
                            <Input
                                name="razao"
                                label="Razão social"
                                value={nfData.entregador}
                                disabled
                            />
                            <Input name="endereco" label="Endereço" disabled />
                            <Input
                                name="CNPJ"
                                label="CNPJ/CPF"
                                value={nfData.cnpjEntregador}
                                disabled
                            />
                        </div>
                        <div className="treeFieldsGroup">
                            <Input
                                label="Estado"
                                name="estado"
                                value={nfData.cnpjEntregador}
                                disabled
                            />
                            <Input
                                label="Cidade"
                                name="cidade"
                                value={nfData.cnpjEntregador}
                                disabled
                            />
                            <Input
                                label="Frete por conta"
                                name="frete"
                                value={(() => {
                                    switch (nfData.modFrete) {
                                        case 0:
                                            return 'Emitente';
                                            break;
                                        case 1:
                                            return 'Destinatário';
                                            break;
                                        case 2:
                                            return 'Terceiros';
                                            break;
                                        case 3:
                                            return 'Transp. Próprio Remetente';
                                            break;
                                        case 4:
                                            return 'Transp. Próprio Destinatário';
                                            break;
                                        case 9:
                                            return 'Sem cobrança de Frete';
                                            break;
                                        default:
                                            return '';
                                    }
                                })()}
                                disabled
                            />
                        </div>
                    </FieldSet>
                    <FieldSet title="Cálculo do imposto">
                        <div className="fourFieldsGroup">
                            <Input
                                label="Base de cálculo do ICMS"
                                name="calcICMS"
                                value={nfData.impostos.vBC}
                            />
                            <Input
                                label="Valor do ICMS"
                                name="valueICMS"
                                value={nfData.impostos.vICMS}
                                disabled
                            />
                            <Input
                                label="Base de cálculo do ICMS subst."
                                name="baseCalcICMSSub"
                                value={nfData.impostos.vBCST}
                                disabled
                            />
                            <Input
                                label="Valor do ICMS subst."
                                name="valueICMSSub"
                                value={nfData.impostos.vST}
                            />
                        </div>
                        <div className="fourFieldsGroup">
                            <Input
                                label="Valor aprox. tributos"
                                name="aproxTributeValue"
                                value={nfData.impostos.vTotTrib}
                                disabled
                            />
                            <Input
                                label="Valor total dos produtos"
                                name="totalValue"
                                value={nfData.impostos.vProd}
                                disabled
                            />

                            <Input
                                label="Valor do frete"
                                name="freteValue"
                                value={nfData.impostos.vFrete}
                                disabled
                            />
                            <Input
                                label="Valor do seguro"
                                name="insuranceValue"
                                value={nfData.impostos.vSeg}
                                disabled
                            />
                        </div>
                        <div className="fourFieldsGroup">
                            <Input
                                label="Desconto"
                                name="discount"
                                value={nfData.impostos.vDesc}
                                disabled
                            />
                            <Input
                                label="Outras despesas acessórias"
                                name="otherExpenses"
                                value={nfData.impostos.vOutro}
                                disabled
                            />
                            <Input
                                label="Valor do IPI"
                                name="IPIValue"
                                value={nfData.impostos.vIPI}
                            />
                            <Input
                                label="Valor total da nota"
                                name="totalNoteValue"
                                value={nfData.impostos.vTotNF}
                                disabled
                            />
                        </div>
                    </FieldSet>
                    <FieldSet title="Dados do produtos">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Código produto</th>
                                    <th>Descrição do produto</th>
                                    <th>NCM/SH</th>
                                    <th>CSOSN</th>
                                    <th>CFOP</th>
                                    <th>UNID</th>
                                    <th>QTDE</th>
                                    <th>Valor unitário</th>
                                    <th>Valor desconto</th>
                                    <th>Valor líquido</th>
                                    <th>Base de cálc. ICMS</th>
                                    <th>Valor ICMS</th>
                                    <th>Valor IPI</th>
                                    <th>Alíq. %</th>
                                    <th>Alíq.% ICMS</th>
                                    <th>Alíq.% IPI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nfData.items.map(item => (
                                    <tr>
                                        <td>1401</td>
                                        <td>
                                            GPU NV RTX3070TI 8GB PHOENIX G6X
                                            256BITS GAINWARD NED307T019P2-1046X
                                            NS: B5210113736
                                        </td>
                                        <th>84733043</th>
                                        <td>0103</td>
                                        <td>5102</td>
                                        <td>UN</td>
                                        <td>1</td>
                                        <th>6.500,00</th>
                                        <td>0,00</td>
                                        <td>6.500,00</td>
                                        <td>0,00</td>
                                        <td>0,00</td>
                                        <th>0,00</th>
                                        <td>0,00</td>
                                        <td>0,00</td>
                                        <td>0,00</td>
                                    </tr>
                                ))}
                                {/* <tr>
                                    <td>1401</td>
                                    <td>
                                        GPU NV RTX3070TI 8GB PHOENIX G6X 256BITS
                                        GAINWARD NED307T019P2-1046X NS:
                                        B5210113736
                                    </td>
                                    <th>84733043</th>
                                    <td>0103</td>
                                    <td>5102</td>
                                    <td>UN</td>
                                    <td>1</td>
                                    <th>6.500,00</th>
                                    <td>0,00</td>
                                    <td>6.500,00</td>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                    <th>0,00</th>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                </tr> */}
                            </tbody>
                        </Table>
                    </FieldSet>
                    <div>
                        <button type="submit">Confirmar entrada</button>
                    </div>
                </CreateNoteForm>
            )}
        </Container>
    );
};

export default StockEntryXML;
