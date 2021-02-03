import React, { useEffect } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { MenuItemLink, Container } from './styles';

interface IMenuItemProps {
    link: string;
    icon: React.FC<IconBaseProps>;
    title: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ link, icon: Icon, title }) => {
    return (
        <Container>
            <MenuItemLink to={link} className="item">
                <div>
                    <Icon />
                    {title}
                </div>
                <MdKeyboardArrowRight />
            </MenuItemLink>
            <div className="panel">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </div>
        </Container>
    );
};

export default MenuItem;
