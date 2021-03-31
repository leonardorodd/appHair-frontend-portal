import styled from 'styled-components';
import { Form } from '@unform/web';
import { lighten } from 'polished';

export const Container = styled.div``;

export const ClientHistoryContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    > :nth-child(2) {
        display: flex;
        justify-content: center;
    }

    > :nth-child(4) {
        margin-top: 50px;
    }

    > :first-child {
        display: flex;
        align-items: center;
        justify-content: center;

        > label {
            font-size: 18px;
        }
    }

    > :last-child {
        > div > table > tbody > tr {
            &:hover {
                cursor: pointer;
                background: #f8f8f8;
            }
        }
    }

    > p {
        font-size: 16px;
        color: var(--primary-text-color);
        font-weight: bold;
    }

    > div {
        > div > table {
            color: var(--primary-text-color);
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 90px;
    margin: 10px;

    > p {
        color: #ffff;
        height: 30%;
        text-align: center;
        padding: 5px;
        margin-bottom: 0px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;
        background-color: var(--base-tertiary-color);
    }

    > div {
        color: #ffff;
        font-size: 20px;
        height: 70%;
        width: 100%;
        display: flex;
        background-color: ${lighten(0.05, '#FD5C0E')};
        align-items: center;
        font-weight: bold;
        justify-content: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
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
