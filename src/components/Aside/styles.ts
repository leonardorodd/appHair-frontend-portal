import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    grid-area: sidebar;
    overflow-y: hidden;
    justify-content: space-between; */

    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width: 250px;
    position: fixed;
    overflow-y: hidden;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    z-index: 2;
    transform: translateX(-252px);
    transition: all 0.6s ease-in-out;

    /*     background-color: ${props => props.theme.color.secondary};
 */
    /*     border-right: 1px solid ${props => props.theme.color.gray};
 */
    background: var(--base-primary-color);
    @media only screen and (min-width: 800px) {
        position: relative;
        transform: translateX(0);

        #close-icon {
            visibility: hidden;
        }
    }

    > button {
        position: absolute;
        left: 17px;
        top: 9px;
        display: none;
        background: none;
        width: 20px;

        svg {
            color: #ffff;
        }
    }
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
    height: 200px;
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
