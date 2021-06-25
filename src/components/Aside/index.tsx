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
    MdInsertDriveFile,
} from 'react-icons/md';

import { RiTruckFill, RiHandSanitizerFill } from 'react-icons/ri';

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
            link: '/schedule',
            subItens: [],
        },
        {
            title: 'Dashboard',
            icon: MdDashboard,
            link: '/dashboard',
            subItens: [
                { title: 'Vendas', icon: MdPerson, link: '/' },
                { title: 'Previsões', icon: MdPerson, link: '/' },
                { title: 'Pendências', icon: MdPerson, link: '/' },
                { title: 'Despesas', icon: MdPerson, link: '/' },
                { title: 'Lucro', icon: MdPerson, link: '/' },
                { title: 'Comissões', icon: MdPerson, link: '/' },
                { title: 'Rateio', icon: MdPerson, link: '/' },
                { title: 'Vales', icon: MdPerson, link: '/' },
                { title: 'Débitos', icon: MdPerson, link: '/' },
                { title: 'Compras', icon: MdPerson, link: '/' },
                { title: 'Fixo', icon: MdPerson, link: '/' },
                { title: 'Top 10 Artistas', icon: MdPerson, link: '/' },
                { title: 'Top 10 Clientes', icon: MdPerson, link: '/' },
                { title: 'Top 10 Produtos', icon: MdPerson, link: '/' },
                { title: 'Top 10 Serviços', icon: MdPerson, link: '/' },
            ],
        },
        {
            title: 'Cadastros',
            icon: MdBorderColor,
            link: '/off',
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
                                    link: '#',
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
        {
            title: 'Financeiro',
            icon: MdAttachMoney,
            link: '/off',
            subItens: [
                {
                    title: 'Entradas, recebimentos e vouchers',
                    icon: MdArrowUpward,
                    link: '/financial/inputs',
                },
                {
                    title: 'Saídas, retiradas e vales',
                    icon: MdArrowDownward,
                    link: '/financial/outputs',
                },
                {
                    title: 'Comandas',
                    icon: MdInsertDriveFile,
                    link: '/financial/comandas',
                },
            ],
        },
        {
            title: 'Estoque',
            icon: AiOutlineCodeSandbox,
            link: '/estoque',
            subItens: [],
        },
        {
            title: 'Estabelecimento',
            icon: MdStore,
            link: '/establishment',
            subItens: [],
        },
        { title: 'Ajuda', icon: MdLiveHelp, link: '/ajuda', subItens: [] },
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

        const subMenuItemList = Array.from(
            document.getElementsByClassName(
                'subItem',
            ) as HTMLCollectionOf<HTMLElement>,
        );

        const sidenavEl = document.getElementById('sideMenu') as HTMLElement;

        subMenuItemList.forEach(item => {
            item.addEventListener('click', () => {
                function toggleClassName(el: Element, className: string) {
                    if (el.classList.contains(className)) {
                        el.classList.remove(className);
                    } else {
                        el.classList.add(className);
                    }
                }

                if (item.getAttribute('href') !== '/off') {
                    toggleClassName(sidenavEl, 'active');
                }
            });
        });

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

                // Close sidemenu on click
                function toggleClassName(el: Element, className: string) {
                    if (el.classList.contains(className)) {
                        el.classList.remove(className);
                    } else {
                        el.classList.add(className);
                    }
                }

                if (item.getAttribute('href') !== '/off') {
                    toggleClassName(sidenavEl, 'active');
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
