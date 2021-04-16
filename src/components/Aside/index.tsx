/* eslint-disable no-alert */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdEventNote,
    MdWork,
    MdBorderColor,
    MdAttachMoney,
    MdLiveHelp,
    MdStore,
    MdGroup,
    MdPerson,
    MdClear,
} from 'react-icons/md';

import { FaUserTie } from 'react-icons/fa';

import {
    RiTruckFill,
    RiLuggageCartFill,
    RiScissorsFill,
    RiHandSanitizerFill,
    RiTakeawayFill,
} from 'react-icons/ri';

import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MenuItemLink, { IMenuItemProps } from './MenuItem';

import { Container, Header, MenuContainer, LogImg, Footer } from './styles';
import Logo from '../../assets/images/logo.png';

const Aside: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const MenuItens = [
        {
            title: 'Agenda',
            icon: MdEventNote,
            link: '#',
            subItens: [],
        },
        {
            title: 'Dashboard',
            icon: MdDashboard,
            link: '/dashboard',
            subItens: [],
        },
        {
            title: 'Cadastros',
            icon: MdBorderColor,
            link: '/#',
            subItens: [
                { title: 'Artistas', icon: MdPerson, link: '/artists' },
                {
                    title: 'Clientes',
                    icon: MdGroup,
                    link: '/clients',
                    subItens: [
                        {
                            title: 'teste2',
                            icon: MdEventNote,
                            link: '#',
                            subItens: [
                                {
                                    title: 'teste',
                                    icon: RiTruckFill,
                                    link: '/#',
                                },
                            ],
                        },
                        {
                            title: 'teste',
                            icon: MdEventNote,
                            link: '#',
                        },
                    ],
                },
                {
                    title: 'Fornecedores',
                    icon: RiTruckFill,
                    link: '/providers',
                },
                {
                    title: 'Produtos',
                    icon: RiHandSanitizerFill,
                    link: '/products',
                },
                { title: 'Serviços', icon: MdWork, link: '/services' },
            ],
        },
        { title: 'Financeiro', icon: MdAttachMoney, link: '/#', subItens: [] },
        {
            title: 'Estoque',
            icon: AiOutlineCodeSandbox,
            link: '/#',
            subItens: [],
        },
        { title: 'Estabelecimento', icon: MdStore, link: '/#', subItens: [] },
        { title: 'Ajuda', icon: MdLiveHelp, link: '/#', subItens: [] },
        /*  { title: 'Entradas', icon: MdArrowUpward, link: '/list/entry-balance' },
        // eslint-disable-next-line prettier/prettier
        { title: 'Saídas', icon: MdArrowDownward, link:'/list/exit-balance' }, */
        // eslint-disable-next-line prettier/prettier
    ];

    function searchItem(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value.toLocaleUpperCase());
    }

    function searchSubItens(currentItem: IMenuItemProps) {
        currentItem.subItens?.some(
            subItem =>
                subItem.title.toLocaleUpperCase().startsWith(searchTerm) ||
                subItem.subItens?.some(sub =>
                    sub.title.toLocaleUpperCase().startsWith(searchTerm),
                ),
        );
    }

    useEffect(() => {
        const menuItemList = Array.from(
            document.getElementsByClassName(
                'item',
            ) as HTMLCollectionOf<HTMLElement>,
        );

        menuItemList.forEach(item => {
            item.addEventListener('click', () => {
                menuItemList.forEach(ele => {
                    const panel = ele.nextElementSibling as Element;

                    if (ele !== item && ele.classList.contains('active')) {
                        panel.removeAttribute('style');
                        ele.classList.remove('active');
                        ele.classList.remove('openAnimation');
                        ele.classList.add('closeAnimation');
                    }
                });

                const panel = item.nextElementSibling as Element;

                if (item.classList.contains('active')) {
                    panel.removeAttribute('style');
                    item.classList.remove('active');
                    item.classList.remove('openAnimation');
                    item.classList.add('closeAnimation');
                } else {
                    panel.setAttribute('style', 'max-height:500px');
                    item.classList.add('active');
                    item.classList.remove('closeAnimation');
                    item.classList.add('openAnimation');
                }
            });
        });
    }, []);

    return (
        <Container id="sideMenu">
            <div id="close-icon">
                <MdClear size={22} />
            </div>
            <div>
                <Header>
                    <LogImg src={Logo} alt="Logo" />
                    {/*                     <input onChange={searchItem} />
                     */}
                </Header>
                <PerfectScrollbar>
                    {/*  <MenuContainer>
                        {MenuItens.map(item => (
                            <MenuItemLink
                                key={item.title}
                                title={item.title}
                                icon={item.icon}
                                link={item.link}
                                grouppedItem
                                subItens={item.subItens}
                            />
                    ))}
                    </MenuContainer> */}
                    <MenuContainer id="menuContainer">
                        {MenuItens.map(item =>
                            item.title
                                .toLocaleUpperCase()
                                .startsWith(searchTerm) ||
                            (item.subItens &&
                                item.subItens.some(subItem =>
                                    subItem.title
                                        .toLocaleUpperCase()
                                        .startsWith(searchTerm),
                                )) ? (
                                <MenuItemLink
                                    key={item.title}
                                    title={item.title}
                                    icon={item.icon}
                                    link={item.link}
                                    grouppedItem
                                    subItens={item.subItens}
                                />
                            ) : (
                                []
                            ),
                        )}
                    </MenuContainer>
                </PerfectScrollbar>
            </div>
            <Footer>
                <MdExitToApp />
                Sair
            </Footer>
        </Container>
    );
};

export default Aside;
