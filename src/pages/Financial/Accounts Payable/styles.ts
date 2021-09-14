import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    height: 100%;
    border-radius: 10px;
    color: var(--primary-text-color);
    display: flex;
    flex-direction: column;

    > :nth-child(3) {
        margin-top: 20px;
        > :first-child {
            padding: 0px;
        }
    }

    > :last-child {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

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

            > tr > :last-child {
                > div {
                    display: flex;
                    > svg {
                        margin-left: 5px;
                    }
                }
            }
        }
    }
`;

export const PayableResume = styled.div`
    border-top: 1px solid var(--primary-border-color);
    background: var(--primary-border-color);
    padding: 20px;
    margin: -30px;
`;

export const ResumeItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PaymentHeaderContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
        margin-bottom: 20px;
    }

    > :nth-child(2) {
        padding: 0px;
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
            display: flex;

            > :first-child {
                margin-right: 20px;
                display: flex;
                align-items: center;

                > strong {
                    margin-right: 10px;
                }

                > div {
                    width: 105px;
                }
            }

            > :nth-child(2) {
                display: flex;

                > strong {
                    margin-right: 10px;
                    margin-left: 10px;
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
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }
`;
