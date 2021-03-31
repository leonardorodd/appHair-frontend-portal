import styled from 'styled-components';

export const Container = styled.div`
    margin-right: -25px;
    z-index: 1;

    .dropbtn {
        border: none;
        background: none;
        font-weight: bold;
        color: var(--primary-text-color);
        box-sizing: border-box;
        border-radius: 0px;

        svg {
            margin-left: 5px;
        }

        &:hover {
            color: var(--base-tertiary-color);
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
        color: var(--base-tertiary-color);
        background: #f8f8f8;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
`;
