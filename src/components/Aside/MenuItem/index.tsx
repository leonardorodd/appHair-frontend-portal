import React, { useEffect } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { MenuItemLink, Container, SubMenuItemLink } from './styles';

export interface IMenuItemProps {
    link?: string;
    grouppedItem?: boolean;
    icon: React.FC<IconBaseProps>;
    title: string;
    subItens?: Array<IMenuItemProps>;
}

const MenuItem: React.FC<IMenuItemProps> = ({
    link,
    icon: Icon,
    title,
    subItens,
    grouppedItem,
}) => {
    return (
        <Container>
            <MenuItemLink to={link || ''} className="item">
                <div>
                    <Icon />
                    {title}
                </div>
                {grouppedItem && <MdKeyboardArrowRight />}
            </MenuItemLink>
            <div className="itemContent">
                {subItens?.length !== 0 ? (
                    subItens?.map(subItem => (
                        <SubMenuItemLink
                            className="subItem"
                            key={subItem.title}
                            to={subItem.link || ''}
                        >
                            <subItem.icon />
                            {subItem.title}
                        </SubMenuItemLink>
                    ))
                ) : (
                    <></>
                )}
            </div>
        </Container>
    );
};

export default MenuItem;
