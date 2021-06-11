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

export const ClientHeaderContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
    }

    > :last-child {
        display: flex;
        justify-content: space-between;
        margin: 25px 0px;

        > :first-child {
            svg {
                margin-left: 5px;
            }
        }

        > :last-child {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            > input {
                height: 35px;
                padding: 10px;
                border-radius: 15px;
                border: 1px solid #eeee;
                padding-left: 40px;

                &:focus {
                    border-color: var(--base-tertiary-color);
                }
            }

            > svg {
                color: var(--base-tertiary-color);
                width: 13px;
                height: 13px;
                left: 15px;
                position: absolute;
                z-index: 1;
            }
        }
    }

    @media only screen and (max-width: 800px) {
        > :last-child {
            > :first-child {
                width: 15%;
                > button {
                    width: 100%;
                    > span {
                        display: none;
                    }
                    > svg {
                        display: block;
                    }
                }
            }

            > :last-child {
                width: 60%;

                > svg {
                    display: block;
                }
                > input {
                    width: 100%;
                }
            }
        }
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }
`;
