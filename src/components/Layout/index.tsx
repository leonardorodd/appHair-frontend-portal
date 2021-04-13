import React, { useEffect } from 'react';
import { Container } from './styles';

import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

const Layout: React.FC = ({ children }) => {
    useEffect(() => {
        const toggleMenuButton = document.getElementById(
            'toggleMenu',
        ) as HTMLButtonElement;

        toggleMenuButton.addEventListener('click', () => {
            const sideMenu = document.getElementById('sideMenu') as Element;
            sideMenu.setAttribute('style', 'width:100vw;z-index:1;');

            /*  if (sideMenu.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                panel.setAttribute('style', 'max-height:500px');
                item.classList.add('active');
            } */
        });
    }, []);

    return (
        <Container>
            <MainHeader />
            <Aside />
            <Content>{children}</Content>
        </Container>
    );
};

export default Layout;
