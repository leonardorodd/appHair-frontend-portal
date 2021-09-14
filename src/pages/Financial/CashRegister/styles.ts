import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    > :last-child {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        > button {
            margin-left: 10px;
        }
    }

    > h1 {
        font-size: 18px;
        color: var(--base-secondary-color);
        margin-bottom: 30px;
    }

    > p {
        font-weight: bold;
        color: var(--secondary-text-color);
        font-size: 16px;
        margin-bottom: 15px;
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-secondary-color);
    }

    > :nth-child(2) {
        align-items: flex-end;
        justify-content: flex-end;
        flex-direction: column;
        display: flex;
        > p {
            width: 320px;
            text-align: center;
        }
        margin-bottom: 15px;
        display: flex;
    }

    > :nth-child(3) {
        display: flex;
    }

    > :nth-child(4) {
        margin-top: 20px;
        display: flex;
    }

    > :nth-child(5) {
        margin-top: 20px;
        display: flex;
    }

    /* > :nth-child(4) {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        padding: 0px 25px;

        > :first-child {
            width: 70%;

            > span {
                font-weight: bold;
                color: var(--secondary-text-color);
                font-size: 16px;
            }
        }

        > :last-child {
            display: flex;
            justify-content: center;
        }
    } */

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
                        margin-right: 5px;
                    }
                }
            }
        }
    }
`;

export const PieChart = styled.div`
    position: relative;
    height: 320px;
    width: 300px;
    /*   padding: 10px;
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
    } */
`;

export const BarChart = styled.div`
    /*  background-color: red;
    position: relative;
    height: 125px;
    padding: 10px;
    width: 100%;
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
    } */
`;

export const ChartsContainer = styled.div`
    width: 100%;
    display: flex;
    color: var(--secondary-text-color);
    margin-top: 80px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1100px) {
        flex-direction: column;

        > :first-child {
            width: 105%;
            height: 100%;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;

    > :nth-child(1),
    > :nth-child(2),
    > :nth-child(3) {
    }

    /* display: flex;
    justify-content: space-evenly;
    margin-top: 10px;

    > span {
        font-weight: bold;
        color: var(--secondary-text-color);
        font-size: 16px;
    }

    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        display: flex;
        align-items: center;
    } */
`;

export const CardsContainer2 = styled.div`
    display: flex;

    /* display: flex;
    justify-content: space-evenly;
    margin-top: 10px;

    > span {
        font-weight: bold;
        color: var(--secondary-text-color);
        font-size: 16px;
    } */
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 90px;
    margin: 10px;

    > p {
        color: #ffff;
        height: 30%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
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
            margin-top: 15px;
            height: 150px;
            left: 130px;
            width: 100px;
            opacity: 0.4;
        }
    }
`;

export const Card2 = styled(Card)`
    > div {
        > svg {
            left: 70px;
        }
    }
`;

export const Card3 = styled(Card)`
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 150px;

    > div {
        font-size: 40px;

        > svg {
            height: 200px;
            left: 90px;
            width: 200px;
        }
    }
`;

export const Section1 = styled.div`
    width: 70%;

    > span {
        font-weight: bold;
        color: var(--secondary-text-color);
        font-size: 16px;
    }
    > :nth-child(2) {
        display: flex;
        justify-content: space-around;
    }
`;

export const Section2 = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > :last-child {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
`;

export const Title = styled.p`
    font-weight: bold;
    color: var(--secondary-text-color);
    font-size: 16px;
    margin-bottom: 10px;
`;
