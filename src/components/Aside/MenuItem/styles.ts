import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    .active {
        background-color: ${darken(0.05, '#313130')};
        color: var(--base-secondary-color);

        > svg {
            transform: rotate(90deg);
        }
    }

    .openAnimation {
        @keyframes animate1 {
            0% {
                height: 0%;
            }
            100% {
                height: 100%;
            }
        }

        &::after {
            animation: animate1 0.3s linear;
            height: 100%;
        }
    }

    .closeAnimation {
        @keyframes animate2 {
            0% {
                height: 100%;
            }
            100% {
                height: 0%;
            }
        }

        &::after {
            animation: animate2 0.3s linear;
            height: 0%;
        }
    }

    .itemContent {
        background-color: white;
        max-height: 0;
        padding-left: 7px;
        overflow: hidden;
        background: ${darken(0.03, '#313130')};
        transition: max-height 0.3s ease-in-out;
    }
`;

export const MenuItemLink = styled(Link)`
    /*     color: ${props => props.theme.color.info};

 */
    color: var(--primary-text-color);
    text-decoration: none;
    position: relative;
    padding: 12px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: ${darken(0.05, '#313130')};
        color: var(--base-secondary-color);
    }

    > svg {
        transition: transform 0.4s;
        width: 15px;
        height: 15px;
    }

    > div > svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    &::after {
        width: 3px;
        bottom: 0;
        left: 0;
        content: '';
        position: absolute;
        background-color: var(--base-secondary-color);
    }
`;

export const SubMenuItemLink = styled(Link)`
    color: var(--primary-text-color);
    text-decoration: none;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover {
        color: var(--base-secondary-color);
    }

    > svg {
        width: 19px;
        height: 19px;
        margin-right: 10px;
    }
`;
