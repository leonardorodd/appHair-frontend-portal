import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    table {
        color: var(--primary-text-color);
        font-size: 12px;

        > thead > tr {
            > :last-child {
                width: 10%;
            }
        }
    }
`;

export const CreateNoteForm = styled(Form)`
    display: flex;
    flex-direction: column;

    > :nth-child(2) {
        display: flex;
    }

    > :last-child {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`;

export const StockHeaderContainer = styled.div`
    margin-bottom: 25px;
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }

    /* > :last-child {
        display: flex;
        justify-content: space-between;
        margin: 25px 0px;

        > button {
            > svg {
                display: none;
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
            > button {
                width: 15%;
                > span {
                    display: none;
                }
                > svg {
                    display: block;
                }
            }

            > div {
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
 */
`;
