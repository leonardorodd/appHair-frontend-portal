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
        color: var(--primary-text-color);

        > video {
            width: 70%;
            height: 270px;
            border: 1px solid var(--primary-border-color);
            background: #eee;
            margin-bottom: 10px;
        }

        &:hover {
            opacity: 0.7;
        }

        > img {
            object-fit: cover;
            width: 70%;
            height: 270px;
            border: 1px solid var(--primary-border-color);
            background: #eee;
            aspect-ratio: auto 300 / 169;
            margin-bottom: 10px;
        }

        input {
            display: none;
        }
    }
`;
