import styled from 'styled-components';

export const Container = styled.div``;

export const StockHeaderContainer = styled.div`
    margin-bottom: 25px;
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }
`;
