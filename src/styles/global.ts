import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
    :root {
        --base-primary-color: #222;
        --base-secondary-color:#dfaa4a;
        --base-tertiary-color: #fd5c0e;
        --base-background-color: #f8f8f8;
        --base-quaternary-color: #FFFF;
        --primary-border-color: #eee;
        --secondary-border-color: #ddd;
        --primary-text-color: #7e7e7e;
        --secondary-text-color: #414141;
        --tertiary-text-color: #292929;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    a {
        text-decoration:none !important;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto Slab',  serif;
        color: var(--primary-text-color);
        font-size: 14px;
    }

    html, body, #root {
        width: 100vw;
        height: 100vh;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;

         &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

            background: none;
            border: none;
            border-radius: 20px;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 35px;
            transition: background 0.3s;

            color: #fff;
            background: var(--base-tertiary-color);

    }

`;
