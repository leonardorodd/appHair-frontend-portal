import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    border-radius: 10px;
    color: var(--primary-text-color);

    table {
        color: var(--primary-text-color);

        > thead > tr {
            > :last-child {
                width: 7%;
            }
        }

        > tbody {
            svg {
                cursor: pointer;
                width: 20px;
                height: 20px;

                &:hover {
                    color: var(--base-tertiary-color);
                }
            }
        }
    }
`;

export const ClientList = styled.div``;

export const ClientListHeader = styled.li`
    > h3 {
        font-size: 16px;
    }

    border-bottom: 3px solid var(--primary-border-color);

    list-style: none;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ClientSearchContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-secondary-color);
    }

    > :last-child {
        display: flex;
        > button {
            > svg {
                display: none;
            }
        }

        > div {
            > button {
                > svg {
                    display: none;
                }
            }
        }
    }

    @media only screen and (max-width: 900px) {
        > :last-child {
            margin: 25px 0px;
            padding: 0px;
            > button {
                width: 18%;
                > span {
                    display: none;
                }
                > svg {
                    display: block;
                }
            }

            > div {
                > input {
                    width: 100%;
                }

                > button {
                    width: 40%;

                    > span {
                        display: none;
                    }
                    > svg {
                        display: block;
                    }
                }
            }
        }

        /* > :last-child {
            align-items: center;
            display: flex;
            flex-direction: column-reverse;

            > :first-child {
                background-color: red;
                width: 100%;
                > button {
                    align-self: flex-start;
                    margin-top: 10px;
                    width: 100%;
                    font-size: 9px !important;
                }
            }

            > :last-child {
                width: 150%;
            }
        } */
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-secondary-color);
    }

    > div {
        margin-top: 20px;
        padding: 30px;
        display: flex;
        justify-content: space-between;

        > div {
            margin-left: 10px;
            display: flex;

            > input {
                height: 35px;
                padding: 10px;
                margin-bottom: 10px;
                border: 1px solid #eeee;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }

            .searchButton {
                border-top-left-radius: 0px;
                border-bottom-left-radius: 0px;
            }
        }
    }
`;
