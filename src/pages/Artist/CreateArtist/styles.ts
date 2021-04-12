import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    border-radius: 10px;

    > form > :nth-child(4) {
        justify-content: center;
        align-items: center;

        > :nth-child(2) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
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

export const SectionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--base-tertiary-color);

    &:hover {
        background: none;
        color: var(--base-tertiary-color);
    }

    > svg {
        transition: transform 0.4s;
        width: 15px;
        height: 15px;
        margin-right: 5px;
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

export const CreateArtistForm = styled(Form)`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1100px) {
        > :first-child {
            flex-direction: column-reverse !important;
            > div {
                width: 100% !important;
                > div {
                    flex-direction: column !important;
                    > div {
                        width: 100% !important;
                    }
                }
            }
        }

        > :nth-child(2) {
            > div {
                width: 100% !important;
                display: flex;
                flex-direction: column !important;

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

        > :nth-child(4) {
            > :first-child {
                > button {
                    width: 100%;
                }
            }

            > div {
                display: flex;
                flex-direction: column !important;
            }
        }

        /* > :first-child {
            display: flex;

            > :first-child {
                width: 100% !important;

                > div {
                    flex-direction: column !important;
                    > div {
                        width: 100% !important;
                        > div {
                            width: 100% !important;
                        }
                    }
                }
            }
        } */
    }

    > :first-child {
        display: flex;
        flex-direction: row;

        > :first-child {
            width: 78%;
        }

        > :last-child {
            width: 22%;
        }
    }

    > :last-child {
        > :first-child {
            margin-bottom: 30px;
        }
        > :last-child {
            > div {
                background-color: red;
            }

            > table {
                color: var(--primary-text-color);
            }
        }
    }
`;
