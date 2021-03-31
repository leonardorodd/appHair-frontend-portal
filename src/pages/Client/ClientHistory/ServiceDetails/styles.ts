import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const PageTitle = styled.div`
    margin-bottom: 45px;

    > p {
        font-weight: bold;
        font-size: 20px;
        color: var(--base-tertiary-color);
        width: max-content;
    }

    > p::after {
        content: '';
        display: block;
        width: 95%;
        border-bottom: 3px solid #fd854b;
    }
`;

export const ServiceHistoryContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
