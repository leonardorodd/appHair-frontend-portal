import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    height: 100vh;
    overflow-y: hidden;
    grid-column: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-row: 1 / span 2;
    /*     background-color: ${props => props.theme.color.secondary};
 */
    /*     border-right: 1px solid ${props => props.theme.color.gray};
 */
    background: var(--base-primary-color);
`;

export const Header = styled.header`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        width: 100%;
    }
`;

export const Footer = styled.a`
    color: var(--primary-text-color);
    text-decoration: none;
    border-top: 3px solid var(--base-secondary-color);
    padding: 15px;
    background: ${darken(0.03, '#313130')};
    display: flex;
    align-items: center;
    z-index: 1;
    justify-content: flex-start;

    > svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    &:hover {
        background-color: ${darken(0.03, '#313130')};
        color: var(--base-secondary-color);
    }
`;

export const LogImg = styled.img`
    width: 180px;
    height: 120px;
    margin-right: 10px;
`;
export const MenuContainer = styled.nav`
    height: 400px;
    /*     background: blue;
 */
    /*  display: flex;
    flex-direction: column;
    margin-top: 30px;

    .highlight {
        background-color: ${darken(0.03, '#313130')};
        color: var(--base-secondary-color);

        &::after {
            content: '';
            width: 4px;
            height: 100%;
            position: absolute;
            left: 0;
            background-color: var(--base-secondary-color);
        }
    } */
`;
