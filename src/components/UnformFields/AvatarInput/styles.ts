import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 30px;

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
            border: 3px solid rgba(255, 255, 255, 0.3);
            background: #eee;
        }

        input {
            display: none;
        }
    }
`;
