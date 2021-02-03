import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    overflow-y: hidden;
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
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogImg = styled.img`
    width: 180px;
    height: 120px;
    margin-right: 10px;
`;
export const MenuContainer = styled.nav`
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
