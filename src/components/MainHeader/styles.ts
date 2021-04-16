import styled from 'styled-components';

export const Container = styled.div`
    /*     background-color: ${props => props.theme.color.secondary};
 */
    background-color: var(--base-quaternary-color);
    border-bottom: 1px solid var(--primary-border-color);
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    /*     border-bottom: 1px solid ${props => props.theme.color.gray};
 */

    > button {
        display: block;
        background: none;
        width: 20px;
        svg {
            color: var(--primary-text-color);
        }
    }

    @media only screen and (min-width: 46.875em) {
        > button {
            display: none;
        }
    }
`;

export const Profile = styled.div`
    > img {
        border-radius: 50px;
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }

    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid var(--primary-border-color);
    /*     color: ${props => props.theme.color.white};
 */
`;
export const Welcome = styled.h3`
    font-size: 16px;
    margin-right: 5px;
    height: 100%;
`;
