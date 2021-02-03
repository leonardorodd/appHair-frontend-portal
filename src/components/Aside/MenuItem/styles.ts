import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    .active {
        background-color: ${darken(0.03, '#313130')};
        color: var(--base-secondary-color);

        > :last-child {
            transition: transform 0.4s;
            transform: rotate(90deg);
        }
    }

    .panel {
        padding: 0 18px;
        background-color: white;
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.5s;
    }
`;

export const MenuItemLink = styled(Link)`
    /*     color: ${props => props.theme.color.info};
 */
    color: var(--primary-text-color);
    text-decoration: none;
    position: relative;
    padding: 15px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: ${darken(0.03, '#313130')};
        color: var(--base-secondary-color);
    }

    > svg {
        transition: transform 0.4s;
        transform: rotate(0deg);
        width: 15px;
        height: 15px;
    }
    > div svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`;
