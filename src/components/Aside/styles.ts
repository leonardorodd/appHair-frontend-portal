import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
    grid-column: 1;
    grid-row: 1 / span 2;
    /*     background-color: ${props => props.theme.color.secondary};
 */
    /*     border-right: 1px solid ${props => props.theme.color.gray};
 */
    background: var(--base-primary-color);
`;

export const Header = styled.header`
    padding: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogImg = styled.img`
    width: 150px;
    height: 60px;
`;
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .highlight {
        background-color: ${darken(0.03, '#313130')};
        color: #fff;
    }
`;
export const MenuItemLink = styled(Link)`
    /*     color: ${props => props.theme.color.info};
 */
    color: var(--base-quaternary-color);
    text-decoration: none;
    padding: 15px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: ${darken(0.03, '#313130')};
        color: #fff;
    }

    > svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`;

export const Title = styled.h3`
    display: flex;
    margin-left: 10px;
    color: ${props => props.theme.color.white};
`;
