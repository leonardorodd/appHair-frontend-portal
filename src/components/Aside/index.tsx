/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdPerson,
    MdEventNote,
    MdWork,
    MdToday,
    MdBorderColor,
    MdAttachMoney,
    MdLiveHelp,
    MdStore,
    MdGroup,
} from 'react-icons/md';

import { BsCalendar } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import { AiOutlineCodeSandbox, AiOutlineShoppingCart } from 'react-icons/ai';
import MenuItemLink from './MenuItem';

import { Container, Header, MenuContainer, LogImg } from './styles';
import Logo from '../../assets/images/logo.png';

const Aside: React.FC = () => {
    const MenuItensContent = [
        { title: 'Agenda', icon: MdEventNote, link: '#' },
        { title: 'Dashboard', icon: MdDashboard, link: '/dashboard' },
        // eslint-disable-next-line prettier/prettier
        { title: 'Cadastros', icon: MdBorderColor, link: '/#'},
        { title: 'Financeiro', icon: MdAttachMoney, link: '/#' },
        { title: 'Estoque', icon: AiOutlineCodeSandbox, link: '/#' },
        { title: 'Estabelecimento', icon: MdStore, link: '/#' },
        { title: 'Ajuda', icon: MdLiveHelp, link: '/#' },
        { title: 'Clientes', icon: MdGroup, link: '/clients' },
        {
            title: 'Fornecedores',
            icon: AiOutlineCodeSandbox,
            link: '/providers',
        },
        { title: 'Serviços', icon: MdWork, link: '/services' },
        /*  { title: 'Entradas', icon: MdArrowUpward, link: '/list/entry-balance' },
        // eslint-disable-next-line prettier/prettier
        { title: 'Saídas', icon: MdArrowDownward, link:'/list/exit-balance' }, */
        // eslint-disable-next-line prettier/prettier
    ];

    useEffect(() => {
        /* $('#menu .item').click(event => {
            $(event.target)
                .addClass('highlight')
                .siblings('.item')
                .removeClass('highlight');
        }); */

        const menuItemList = Array.from(
            document.getElementsByClassName(
                'item',
            ) as HTMLCollectionOf<HTMLElement>,
        );

        menuItemList.forEach(item => {
            item.addEventListener('click', () => {
                menuItemList.forEach(ele => {
                    if (ele !== item) {
                        ele.classList.remove('active');
                        const panel = ele.nextElementSibling as Element;
                        panel.removeAttribute('style');
                    }
                });

                item.classList.toggle('active');
                const panel = item.nextElementSibling as Element;
                if (panel.getAttribute('style')) {
                    panel.removeAttribute('style');
                } else {
                    panel.setAttribute('style', 'max-height:500px');
                }
            });
        });
    }, []);
    return (
        <Container>
            <Header>
                <LogImg src={Logo} alt="Logo" />
            </Header>
            <MenuContainer id="menu">
                {MenuItensContent.map(item => (
                    <MenuItemLink
                        title={item.title}
                        icon={item.icon}
                        link={item.link}
                    />
                ))}
            </MenuContainer>
            <div>
                {/*                         { title: 'Sair',  icon: MdExitToApp, link: '#' }
                 */}
            </div>
        </Container>
    );
};

export default Aside;
