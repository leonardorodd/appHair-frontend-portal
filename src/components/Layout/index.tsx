import React, { ClassType, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import { Container } from './styles';

import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

const Layout: React.FC = ({ children }) => {
    useEffect(() => {
        const menuIconEl = document.getElementById('menu-icon') as HTMLElement;
        const sidenavEl = document.getElementById('sideMenu') as HTMLElement;

        const sidenavCloseEl = document.getElementById(
            'close-icon',
        ) as HTMLElement;

        function toggleClassName(el: Element, className: string) {
            if (el.classList.contains(className)) {
                el.classList.remove(className);
            } else {
                el.classList.add(className);
            }
        }

        menuIconEl.addEventListener('click', () => {
            toggleClassName(sidenavEl, 'active');
        });

        sidenavCloseEl.addEventListener('click', () => {
            toggleClassName(sidenavEl, 'active');
        });
    }, []);

    return (
        <Container>
            <div id="menu-icon">
                <MdMenu size={22} />
            </div>
            <MainHeader />
            <Aside />
            <Content>{children}</Content>
        </Container>
    );
};

export default Layout;
