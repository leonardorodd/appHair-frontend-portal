import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 5px;
    flex-direction: column;
    justify-content: center;

    > div {
        > label {
            margin-left: 15px;
            margin-bottom: 5px;
            font-size: 13px;
            font-weight: bold;
            color: var(--primary-text-color);
        }
    }

    /*  > span {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #db3b21;

        > svg {
            width: 16px;
            height: 16px;
        }
    } */
`;

export const ButtonContainer = styled.div`
    display: flex;

    > :first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    > :last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    > button {
        width: 40%;
        border-radius: 0px;
    }

    > input {
        width: 70%;
        text-align: center;
        padding: 0px 5px;
        color: var(--primary-text-color);
        border: 1px solid var(--primary-border-color);

        &[disabled] {
            background-color: var(--base-quaternary-color);
            cursor: not-allowed;
        }
    }
`;
