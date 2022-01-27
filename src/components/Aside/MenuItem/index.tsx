import React, { useEffect } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { MenuItemLink, Container, SubMenuItemLink } from './styles';

export interface IMenuItemProps {
    link?: string;
    grouppedItem?: boolean;
    icon: React.FC<IconBaseProps>;
    title: string;
    externalLink?: boolean;
    subItens?: Array<IMenuItemProps>;
}

const MenuItem: React.FC<IMenuItemProps> = ({
    link,
    icon: Icon,
    title,
    subItens,
    grouppedItem,
    externalLink,
}) => {
    return (
        <Container>
            <MenuItemLink
                to={externalLink ? { pathname: link } : link || ''}
                className="item"
                target={externalLink ? '_blank' : ''}
            >
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
                            to={
                                subItem.externalLink
                                    ? { pathname: subItem.link }
                                    : subItem.link || ''
                            }
                            target={subItem.externalLink ? '_blank' : ''}
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
