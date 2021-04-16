import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    border-radius: 10px;
    color: var(--primary-text-color);
`;

export const ClientList = styled.div``;

export const ClientListHeader = styled.li`
    > h3 {
        font-size: 16px;
    }

    border-bottom: 3px solid var(--primary-border-color);

    list-style: none;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ClientSearchContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-secondary-color);
    }

    @media only screen and (max-width: 1100px) {
        > :last-child {
            align-items: center;
            display: flex;
            flex-direction: column-reverse;

            > :first-child {
                width: 150%;
                > button {
                    align-self: flex-start;
                    margin-top: 10px;
                }
            }

            > :last-child {
                width: 150%;
            }
        }
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-secondary-color);
    }

    > div {
        margin-top: 20px;
        padding: 30px;
        display: flex;
        justify-content: space-between;

        > div {
            margin-left: 10px;
            display: flex;

            > input {
                height: 35px;
                padding: 10px;
                margin-bottom: 10px;
                border: 1px solid #eeee;
                border-radius: 5px;
            }

            .searchButton {
                border-top-left-radius: 0px;
                border-bottom-left-radius: 0px;
            }
        }
    }
`;
