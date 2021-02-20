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
    align-items: center;
    transition: all 0.3s;

    &:hover {
        /*         transform: translateX(5px);
 */
    }

    > div {
        display: flex;
        align-items: center;
        width: 26.75%;
    }

    > :last-child {
        width: 5%;
        justify-content: space-between;
        align-items: center;

        svg {
            cursor: pointer;
            width: 20px;
            height: 20px;
            &:hover {
                color: var(--base-tertiary-color);
            }
        }
    }

    /* > :first-child {
        width: 95%;

        > div {
            width: 25%;
        }
    }
    > :last-child {
        width: 5%;
        justify-content: space-between;

        svg {
            cursor: pointer;
            width: 20px;
            height: 20px;
            &:hover {
                color: var(--base-tertiary-color);
            }
        }
    }

    > span {
        width: 25%;
    } */
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;
    position: absolute;
    left: 0;
    background-color: ${props => props.color};
`;
