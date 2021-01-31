import React, { useEffect } from 'react';
import $ from 'jquery';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdPerson,
    MdWork,
} from 'react-icons/md';

import { AiOutlineCodeSandbox } from 'react-icons/ai';
import {
    Container,
    Header,
    MenuContainer,
    MenuItemLink,
    LogImg,
    Title,
} from './styles';
import Logo from '../../assets/images/logo.png';

const Aside: React.FC = () => {
    useEffect(() => {
        $('#menu a').click(event => {
            $(event.target)
                .addClass('highlight')
                .siblings('a')
                .removeClass('highlight');
        });
    }, []);

    return (
        <Container>
            <Header>
                <LogImg src={Logo} alt="Logo" />
                {/*                 <Title>Beauty Business</Title>
                 */}
            </Header>
            <MenuContainer id="menu">
                <MenuItemLink to="/dashboard">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink to="/clients">
                    <MdPerson />
                    Clientes
                </MenuItemLink>
                <MenuItemLink to="/providers">
                    <AiOutlineCodeSandbox />
                    Fornecedores
                </MenuItemLink>
                <MenuItemLink to="/services">
                    <MdWork />
                    Serviços
                </MenuItemLink>
                <MenuItemLink to="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink to="/list/exit-balance">
                    <MdArrowDownward />
                    Saidas
                </MenuItemLink>
                <MenuItemLink to="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
};

export default Aside;
