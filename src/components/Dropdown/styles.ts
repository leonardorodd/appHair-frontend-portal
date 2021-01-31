import styled from 'styled-components';

export const Container = styled.div`
    .dropbtn {
        border: none;
        background: none;
        font-weight: bold;
        color: var(--base-quaternary-color);
        box-sizing: border-box;

        svg {
            margin-left: 5px;
        }
    }

    .dropdown-content {
        width: 100%;
        display: none;
        position: absolute;
        background-color: #fff;
        min-width: 160px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 16px 0px,
            rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
    }

    .dropdown-content a {
        padding: 14px;
        position: relative;
        color: var(--base-primary-color);
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
        color: var(--base-secondary-color);
        background: #f8f8f8;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* .dropbtn {
        &:hover {
            color: var(--base-fibre-color);
        }
    } */
`;
