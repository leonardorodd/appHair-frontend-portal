import styled from 'styled-components';

export const Container = styled.div``;

export const QuestionsHeaderContainer = styled.div`
    margin-bottom: 21px;

    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
        margin-bottom: 20px;
    }

    > h1::after {
        content: '';
        display: block;
        width: 150px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }
`;
