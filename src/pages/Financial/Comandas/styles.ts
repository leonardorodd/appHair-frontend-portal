import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const ComandaHeaderContainer = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-tertiary-color);
        line-height: none;
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-tertiary-color);
    }
`;

export const CreateComandaForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 35px;
`;

export const AddComandaMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
