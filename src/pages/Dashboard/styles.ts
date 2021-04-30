import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-secondary-color);
        margin-bottom: 30px;
    }

    > span {
        font-weight: bold;
        color: var(--secondary-text-color);
        font-size: 16px;
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-secondary-color);
    }
`;

export const PieChart = styled.div`
    padding: 10px;
    height: 320px;
    width: 300px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > div {
        margin-bottom: 10px;
        > span {
            font-weight: bold;
            color: var(--secondary-text-color);
            font-size: 16px;
        }
    }
`;

export const BarChart = styled.div`
    width: 550px;
    height: 320px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > div {
        margin-bottom: 10px;
        > span {
            font-weight: bold;
            color: var(--secondary-text-color);
            font-size: 16px;
        }
    }
`;

export const ChartsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: var(--secondary-text-color);
    margin-top: 50px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1100px) {
        flex-direction: column;

        > :first-child {
            width: 100%;
        }
    }
`;

export const CardsContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export const CardsContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
    > span {
        font-weight: bold;
        color: var(--secondary-text-color);
        font-size: 16px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    height: 90px;
    margin: 10px;

    > p {
        color: #ffff;
        height: 30%;
        text-align: center;
        padding: 5px;
        z-index: 1;
        margin-bottom: 0px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;
        background-color: var(--base-tertiary-color);
    }

    > div {
        color: #ffff;
        position: relative;
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

        > p {
            z-index: 1;
            margin: 0px;
        }

        > svg {
            position: absolute;
            object-fit: cover;
            margin-top: 20px;
            height: 100px;
            left: 110px;
            width: 150px;
            opacity: 0.4;
        }
    }
`;
