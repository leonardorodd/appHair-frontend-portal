import React, { useEffect } from 'react';
import { Container } from './styles';

import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

const Layout: React.FC = ({ children }) => {
    useEffect(() => {
        const toggleMenuButtons = Array.from(
            document.getElementsByClassName(
                'toggleMenu',
            ) as HTMLCollectionOf<HTMLElement>,
        );

        toggleMenuButtons.forEach(element => {
            element.addEventListener('click', () => {
                const sideMenu = document.getElementById('sideMenu') as Element;

                if (sideMenu.hasAttribute('style')) {
                    sideMenu.removeAttribute('style');
                } else {
                    sideMenu.classList.add('openAnimation');
                    sideMenu.setAttribute('style', 'width:100vw;z-index:1;');
                }
            });
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
