import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

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
        --secondary-text-color: #585858;
        --tertiary-text-color: #292929;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

   /*  @font-face {
        font-family: 'sans-serif';
        src: local('Gidole-Regular'), url(../assets/fonts/Gidole-Regular.otf) format('otf');
    } */

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
        background: none;
        border: none;
        border-radius: 20px;
        font-weight: bold;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        font-size: 11px;
        height: 35px;
        transition: background 0.3s;
        color: var(--base-quaternary-color);
        background: var(--base-tertiary-color);

        &:hover {
            background: ${darken(0.04, '#fd5c0e')};
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }

    .twoFieldsGroup {
        display: flex;
        > div {
            width: 50%;
        }
    }
    .treeFieldsgroup {
        display: flex;
        > div {
            width: 33.3%;
        }
    }
    .fourFieldsGroup {
        display: flex;
        > div {
            width: 25%;
        }
    }

    .baseModalStyle {

        .modal-content {
            border: none;
        }

        .modal-header {
            display: flex;
            align-items: center;
            height: 50px;
            background: var(--base-tertiary-color);
            color: #fff;

            span {
                color: #fff;
            }
        }

        .modal-body {
            color: var(--primary-text-color);
            padding: 0px;
        }

        .modal-title {
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                margin: 0px;
                font-weight: bold;
                font-size: 18px;
            }
        }

        .modal-footer {
            display: flex;
            justify-content: flex-end;
            border-top: 0px;

            > :first-child {
                border: 2px solid var(--primary-border-color);
                background: none;
                color: var(--primary-text-color);

                 &:hover {
                    color: var(--base-tertiary-color);
                }
            }

            button {
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .modal-90w {
            width: 90%;
            max-width: 1300px;
        }
    }

`;
