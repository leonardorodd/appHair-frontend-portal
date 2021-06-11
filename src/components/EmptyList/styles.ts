import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 40%;

    svg {
        padding: 10px;
        width: 100px;
        height: 100px;
    }

    span {
        margin-top: 4px;
        font-size: 10px;
    }

    strong {
        font-size: 12px;
    }
`;
