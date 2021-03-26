import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    border-radius: 10px;
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
    flex-direction: column;
    width: 35%;

    > :first-child {
        margin-bottom: 20px;
    }
`;

export const DayScheduleItem = styled.div`
    display: flex;
    margin: 2px;
    border-radius: 10px;
    align-items: center;
    color: var(--primary-text-color);
    border: 1px solid var(--primary-border-color);
    /*   > button {
        background: none;
        color: var(--base-tertiary-color);
        border: 2px solid #fd854b;
        font-size: 10px;
        padding: 5px;
        margin: 5px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    } */
    > input {
        background: red;
    }

    > div {
        > div > input {
            width: 68px;
        }
    }

    > :first-child {
        width: 50%;
    }
`;

export const CreateArtistForm = styled(Form)`
    display: flex;
    flex-direction: column;
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
        display: flex;

        > div {
            width: 50%;
        }
    }

    > :last-child {
        > :first-child {
            > :first-child {
                margin-bottom: 40px;
            }
        }
    }
`;
