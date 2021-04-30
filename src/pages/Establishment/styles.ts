import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const PageTitle = styled.div`
    margin-bottom: 45px;

    > p {
        font-weight: bold;
        font-size: 20px;
        color: var(--base-tertiary-color);
        width: max-content;
    }

    > p::after {
        content: '';
        display: block;
        width: 95%;
        border-bottom: 3px solid #fd854b;
    }
`;

export const CreateEstablismentForm = styled(Form)`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1100px) {
        > :first-child {
            > div {
                display: flex;
                flex-direction: column !important;
                width: 100% !important;

                > div {
                    display: flex;
                    width: 100% !important;
                }
            }
        }

        > :nth-child(3) {
            > div {
                display: flex;
                flex-direction: column !important;

                > div {
                    width: 100% !important;
                }
            }
        }

        > :nth-child(4),
        > :nth-child(5) {
            > :first-child {
                > button {
                    width: 45%;
                }
            }
        }
    }

    > :first-child {
        > :last-child {
            > :first-child {
                > textarea {
                    height: 82%;
                }
            }
        }
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
        }
    }

    > :nth-child(2) {
        justify-content: center;
        align-items: center;

        > :nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    }
`;

export const CustomFieldSet = styled.div`
    position: relative;
    border: 1px solid var(--primary-border-color);
    padding: 25px 15px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    margin: 6px;
    margin-top: 15px;
    border-radius: 15px;
    flex: 1;

    > span {
        color: var(--primary-text-color);
        font-size: 12px;
        margin-left: 15px;
        margin-top: -4px;
    }

    &:before {
        content: 'Taxa administrativa';
        position: absolute;
        top: -14px;
        left: 3px;
        padding: 0px 10px;
        background: #fff;
        font-size: 13px;
        font-weight: bold;
        color: var(--primary-text-color);
    }
`;
export const PageFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 0px;
    margin-top: 40px;

    > :first-child {
        border: 2px solid var(--primary-border-color);
        background: none;
        margin-right: 10px;
        color: var(--primary-text-color);

        &:hover {
            color: var(--base-tertiary-color);
        }
    }

    button {
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const WeekScheduleContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const DayScheduleItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
    color: var(--primary-text-color);
    border: 1px solid var(--primary-border-color);
    height: max-content;
    width: 140px;

    > p {
        margin-bottom: 0px;
        font-weight: bold;
        margin-top: -8px;
    }

    > :nth-child(3) {
        display: flex;
        align-items: center;

        > div > div > input {
            width: 68px;
        }
    }
`;
