import styled from 'styled-components';
import { lighten } from 'polished';
import { Form } from '@unform/web';

export const FilterContainer = styled.div`
    display: flex;
    width: 100%;

    > div {
        width: 100%;
        margin-right: 15px;
    }
`;

export const EventContainer = styled.div``;

export const Container = styled.div`
    > h1 {
        font-size: 18px;
        color: var(--base-secondary-color);
        margin-bottom: 30px;
        line-height: 22px !important;
    }

    > :nth-child(2) {
        margin-bottom: 25px;
    }

    .react-datepicker-popper {
        z-index: 9 !important;
    }

    > span {
        font-weight: bold;
        color: var(--secondary-text-color);
        font-size: 16px;
    }

    > h1::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid var(--base-secondary-color);
    }

    .rbc-allday-cell {
        display: none;
    }
    .rbc-time-view .rbc-header {
        border-bottom: none;
    }

    .rbc-time-content {
        border-top: 1px solid #ddd;
        width: 100%;
        scroll-behavior: smooth;
        overflow-x: auto;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    .rbc-time-header-gutter {
        min-width: 45.8px !important;
    }

    /*  .rbc-timeslot-group {
        border-bottom: 0;
    } */

    .rbc-time-content {
        border-top: 0;
    }

    .rbc-time-gutter {
        background: ${lighten(0.6, '#222')};
        color: #fff;
    }

    .rbc-time-header-gutter {
        border-right: 1px solid ${lighten(0.05, '#222')};
    }

    /*    .rbc-timeslot-group {
        border-bottom: none;
    }
 */
    /*   .rbc-time-header-content {
        border-left: 1px solid ${lighten(0.05, '#222')};
    } */

    /*  .rbc-time-view {
        border-bottom: none !important;
    }
 */
    .rbc-time-header {
        border-bottom: 2px solid var(--base-border-color);
    }

    .rbc-current-time-indicator {
        background-color: var(--base-tertiary-color);
    }

    .rbc-time-header-content > .rbc-row.rbc-row-resource {
        border-bottom: none;
    }

    .rbc-time-view-resources .rbc-time-gutter,
    .rbc-time-view-resources .rbc-time-header-gutter {
        z-index: 1;
    }

    .rbc-time-header-gutter {
        background-color: #eee;
        border-right: 1px solid #ddd;
    }

    .rbc-header {
        background-color: #eee;
    }

    .rbc-event-label {
        display: none;
    }

    .rbc-event {
        display: flex;
        padding: 0px;
        background: #eee;
        border: 1px solid #eee;
    }

    .rbc-time-header-content + .rbc-time-header-content {
        margin-left: 0px !important;
    }

    .rbc-time-view-resources .rbc-day-slot {
        min-width: 225px;
    }
    .rbc-time-view-resources .rbc-time-header-content {
        min-width: 225px;
    }

    @media only screen and (max-width: 1000px) {
        .rbc-time-view-resources .rbc-day-slot {
            min-width: 110px;
        }
        .rbc-time-view-resources .rbc-time-header-content {
            min-width: 110px;
        }

        .rbc-time-header-gutter {
            min-width: 41px !important;
        }
    }

    .rs-drawer-footer {
        height: 80px !important;
    }

    .rbc-event {
        height: auto !important;
    }
`;

export const ResourceHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    color: #fff;
    color: var(--primary-text-color);
    background-color: #eee;

    > p {
        font-size: 12px;
        font-weight: lighter;
    }

    > strong {
        font-size: 15px;
    }

    > img {
        width: 60px;
        height: 60px;
        border-radius: 50px;
    }
`;

interface StyledEventProps {
    status: string;
}

export const Event = styled.div<StyledEventProps>`
    width: 100%;
    height: auto;
    color: var(--primary-text-color);
    border-radius: 5px;
    display: flex;
    padding-bottom: 10px;
    padding-top: 10px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > p {
        margin-bottom: 10px;
    }

    > ul {
        margin-top: 8px;
    }

    background: ${props => {
        switch (props.status) {
            case 'Agendado':
                return '#ffd8b7';
                break;
            case 'Alterado':
                return '#fcfcdc';
                break;
            case 'Confirmado':
                return '#d4eef9';
                break;
            case 'Cliente chegou':
                return '#e0f4da';
                break;
            case 'Finalizado':
                return '#f2f2f2';
                break;
            default:
                return '';
        }
    }};

    /* > :first-child {
        height: 60px;
        width: 100%;
        padding-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: ${props => {
        switch (props.status) {
            case 'Agendado':
                return '#ffd8b7';
                break;
            case 'Alterado':
                return '#fcfcdc';
                break;
            case 'Confirmado':
                return '#d4eef9';
                break;
            case 'Cliente chegou':
                return '#e0f4da';
                break;
            case 'Finalizado':
                return '#f2f2f2';
                break;
            default:
                return '';
        }
    }};

        > img {
            top: 9px;
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            box-shadow: 0 0 0 3px #fff, 0 0 0 3px #fff,
                0 2px 5px 4px rgba(0, 0, 0, 0.2);
        }
    }

    > :last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        height: 100%;
        background-color: #fff;

        > :first-child {
            font-size: 15px;
            font-weight: bold;
        }

        > ul {
            padding-top: 10px;
        }

        > :nth-child(3) {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            padding-bottom: 15px;

            > div {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 4px;
            }

            > :first-child {
                svg {
                    margin-right: 3px;
                }
            }
        }
    } */
`;

export const CalendarContainer = styled.div`
    position: relative;

    > :first-child {
        position: absolute;
        z-index: 2;
        display: flex;
        top: calc(100% / 22.5);
        left: 0;
        width: 100.5%;
        justify-content: space-between;

        > button {
            background: none;
            border: none;
            width: 40px !important;

            > svg {
                width: 40px;
                height: 40px;
                color: var(--primary-text-color);
            }
        }
    }

    /*  .rbc-event:hover {
        height: fit-content !important;
    } */
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    padding: 10px;

    > svg {
        width: 23px;
        height: 23px;

        &:hover {
            color: var(--base-tertiary-color);
        }
    }

    .rs-modal-backdrop.in {
        opacity: 0.08 !important;
    }
`;

export const PopoverButtonStyle = styled.button`
    cursor: pointer;

    > svg {
        color: var(--primary-text-color);
        margin-right: 5px;

        &:hover {
            color: var(--base-fibre-color);
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > button {
        margin-left: 10px;
        width: 120px;
    }
`;

export const CreateEventForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 35px;

    > :last-child {
        > :last-child {
            margin-top: 15px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
