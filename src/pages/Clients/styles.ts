import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 10px;
    padding: 40px;
    color: var(--primary-text-color);
    background: var(--base-quaternary-color);
`;

export const ClientList = styled.div``;

export const ClientListHeader = styled.li`
    > div {
        display: flex;
        align-items: center;
        width: 26.75%;
    }

    > :last-child {
        width: 5%;
        justify-content: center;
        align-items: center;
    }

    border-bottom: 2px solid var(--primary-border-color);
    list-style: none;
    margin: 10px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ClientSearchContainer = styled.div`
    > h1 {
        font-size: 25px;
        color: var(--base-tertiary-color);
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }

    > div {
        margin-top: 20px;
        padding: 30px 0px;
        display: flex;
        justify-content: space-between;

        > div {
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
