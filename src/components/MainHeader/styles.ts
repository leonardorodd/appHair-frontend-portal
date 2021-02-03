import styled from 'styled-components';

export const Container = styled.div`
    /*     background-color: ${props => props.theme.color.secondary};
 */
    background-color: var(--base-quaternary-color);
    border-bottom: 1px solid var(--primary-border-color);
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    /*     border-bottom: 1px solid ${props => props.theme.color.gray};
 */
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
