import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 10px;

    label {
        font-weight: bold;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        justify-content: center;
        align-items: center;

        &:hover {
            opacity: 0.7;
        }

        img {
            object-fit: cover;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 1px solid var(--primary-border-color);
            background: #eee;
            margin-bottom: 10px;
        }

        input {
            display: none;
        }
    }
`;
