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

            if (sideMenu.classList.contains('active')) {
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

            /* menuItemList.forEach(ele => {
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
            }); */
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
