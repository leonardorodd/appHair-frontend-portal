import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    table {
        color: var(--primary-text-color);

        > thead > tr {
            > :last-child {
                width: 10%;
            }
        }

        > tbody > tr {
            > :first-child {
                > form > div {
                    margin: 0px;
                }
            }
        }
    }
`;

export const CommissionHeaderContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
        margin-bottom: 20px;
    }

    > :last-child {
        display: flex;
        justify-content: space-between;
        margin: 25px 0px;
        color: var(--primary-text-color);

        > :first-child {
            > strong {
                margin-right: 10px;
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

export const GroupSelectContainer = styled.div`
    > div {
        width: 240px;
    }
`;
export const CheckBoxContainer = styled(Form)``;

export const CommissionPaymentForm = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > :first-child {
        color: var(--primary-text-color);
        margin: 10px;
        > strong {
            margin-right: 10px;
        }
    }
`;

export const CommissionPaymentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > :first-child {
        width: 230px;
    }
`;

export const RescissionPaymentForm = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > :first-child {
        color: var(--primary-text-color);
        margin: 10px;
        > strong {
            margin-right: 10px;
        }
    }
`;
