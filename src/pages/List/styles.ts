import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    > button {
        font-size: 18px;
        font-weight: 500;
        background: none;
        border: none;
        color: ${props => props.theme.color.white};
        margin: 0 10px;
        transition: opacity 0.3s;

        &:hover {
            opacity: 0.7;
        }
    }

    .tag-filter-recurrent::after {
        content: '';
        margin: auto;
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.color.warning};
    }

    .tag-filter-eventual::after {
        content: '';
        margin: auto;
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.color.success};
    }
`;
