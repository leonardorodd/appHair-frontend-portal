import styled from 'styled-components';

interface ITagProps {
    color: string;
}

export const Container = styled.li`
    /*     background-color: ${props => props.theme.color.tertiary};
 */
    background-color: var(--base-quaternary-color);
    list-style: none;
    border-radius: 5px;
    margin-bottom: 3px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s;

    position: relative;

    &:hover {
        opacity: 0.7;
        transform: translateX(10px);
    }

    cursor: pointer;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;
    position: absolute;
    left: 0;
    background-color: ${props => props.color};
`;
