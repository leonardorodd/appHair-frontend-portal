import styled from 'styled-components';

interface ISectionProps {
    title: string;
}

export const Container = styled.div<ISectionProps>`
    position: relative;
    border-top: 3px solid var(--primary-border-color);
    padding: 25px 0px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    margin: 6px;
    flex: 1;

    &:before {
        content: '${props => props.title}';
        position: absolute;
        top: -14px;
        padding: 0px 10px;
        background: #fff;
        font-size: 16px;
        font-weight: bold;
        color: var(--secondary-text-color);
    }
`;
