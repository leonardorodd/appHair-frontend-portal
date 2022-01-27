/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable radix */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
import React, { useEffect, useState, useRef, useMemo } from 'react';
import {
    Calendar,
    momentLocalizer,
    ResourceHeaderProps,
} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
    MdPerson,
    MdAccessTime,
    MdAttachMoney,
    MdEdit,
    MdInfo,
    MdAlarm,
    MdAlarmOn,
    MdInfoOutline,
    MdPlayCircleOutline,
} from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import {
    BiStopCircle,
    BiCalendarCheck,
    BiCalendarX,
    BiCalendarEdit,
    BiCalendarExclamation,
} from 'react-icons/bi';

import { Button, ButtonToolbar, Drawer, Popover, Whisper, Modal } from 'rsuite';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { SubmitHandler, FormHandles } from '@unform/core';
import DatePicker from 'react-datepicker';
import ComboBox from 'react-select';
import Button1 from 'react-bootstrap/Button';
import Input from '../../components/UnformFields/Input';
import FieldSet from '../../components/FieldSet';

import 'rsuite/src/styles/themes/default/index.less';

/* import 'rsuite/dist/styles/rsuite-default.css';
 */ import MaskedInput from '../../components/UnformFields/InputMaskd';
import Select from '../../components/UnformFields/Select';
import './customModal.css';
import '../../styles/customreactdatepicker.css';

import {
    Container,
    ResourceHeader,
    CalendarContainer,
    Event,
    MenuContainer,
    PopoverButtonStyle,
    CreateEventForm,
    ButtonContainer,
    FilterContainer,
    EventContainer,
} from './styles';

interface IResource {
    title: string;
    position: string;
    img: string;
}

interface IEventService {
    descricao: string;
    duracao: string;
    preco: string;
}

interface IEvent {
    id: number;
    title: string;
    status: string;
    resourceId: string;
    client: string;
    servicos: Array<IEventService>;
    start: Date;
    preference: string;
    end: Date;
    img: string;
    cellPhone?: string;
}

interface IEventFormData {
    client: {
        label: string;
        value: number;
    };
    preference: {
        label: string;
        value: number;
    };
    hour: {
        label: string;
        value: number;
    };
    cellPhone: string;
    services: Array<IEventService>;
}

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

const Schedule: React.FC = () => {
    const [show, setShow] = useState(false);
    const [showEventModal, setShowEventModal] = useState(false);
    const [showAttendanceModal, setShowAttendanceEventModal] = useState(false);
    const [focusedEvent, setFocusedEvent] = useState({});

    const [eventData, setEventData] = useState<IEvent>({
        id: 0,
        title: '',
        status: '',
        resourceId: '',
        client: '',
        cellPhone: '',
        preference: '',
        servicos: [],
        start: new Date(),
        end: new Date(),
        img: '',
    });

    const [events, setEvents] = useState([
        {
            title: 'Corte cabelo',

            resourceId: 'Luciano',
            client: 'Juliana',
            status: 'Agendado',
            img: 'https://i.pravatar.cc/500',
            servicos: [
                {
                    descricao: 'Unhas',
                    duracao: '00:30',
                    preco: '80',
                },
                {
                    descricao: 'Escova',
                    duracao: '00:45',
                    preco: '60',
                },
                {
                    descricao: 'Corte',
                    duracao: '00:45',
                    preco: '60',
                },
            ],
            start: new Date(2021, 4, 24, 5, 30, 0, 0),
            end: new Date(2021, 4, 24, 9, 20, 0, 0),
        },
        {
            title: 'Barba',
            resourceId: 'Jessica',
            client: 'Juliana',
            status: 'Alterado',
            img: 'https://i.pravatar.cc/500',
            servicos: [
                {
                    descricao: 'Unhas',
                    duracao: '00:30',
                    preco: '80',
                },
                {
                    descricao: 'Escova',
                    duracao: '00:45',
                    preco: '60',
                },
            ],
            start: new Date(2021, 4, 24, 2, 30, 0, 0),
            end: new Date(2021, 4, 24, 4, 30, 0, 0),
        },
        {
            title: 'Unhas',
            resourceId: 'Marcia',
            status: 'Confirmado',
            img: 'https://i.pravatar.cc/500',
            client: 'Juliana',
            servicos: [
                {
                    descricao: 'Unhas',
                    duracao: '00:30',
                    preco: '80',
                },
                {
                    descricao: 'Escova',
                    duracao: '00:45',
                    preco: '60',
                },
            ],
            start: new Date(2021, 4, 24, 5, 30, 0, 0),
            end: new Date(2021, 4, 24, 6, 30, 0, 0),
        },
        {
            title: 'Corte cabelo',
            resourceId: 'Alan',
            client: 'Juliana',
            status: 'Cliente chegou',
            img: 'https://i.pravatar.cc/500',
            servicos: [
                {
                    descricao: 'Unhas',
                    duracao: '00:30',
                    preco: '80',
                },
                {
                    descricao: 'Escova',
                    duracao: '00:45',
                    preco: '60',
                },
            ],
            start: new Date(2021, 4, 24, 5, 30, 0, 0),
            end: new Date(2021, 4, 24, 10, 30, 0, 0),
        },
        {
            title: 'Corte cabelo',
            resourceId: 'Alan',
            client: 'Juliana',
            status: 'Cliente chegou',
            img: 'https://i.pravatar.cc/500',
            servicos: [
                {
                    descricao: 'Unhas',
                    duracao: '00:30',
                    preco: '80',
                },
                {
                    descricao: 'Escova',
                    duracao: '00:45',
                    preco: '60',
                },
            ],
            start: new Date(2021, 4, 24, 6, 0, 0, 0),
            end: new Date(2021, 4, 24, 8, 0, 0, 0),
        },
        {
            title: 'Corte cabelo',
            resourceId: 'Alan',
            client: 'Juliana',
            status: 'Cliente chegou',
            img: 'https://i.pravatar.cc/500',
            servicos: [
                {
                    descricao: 'Unhas',
                    duracao: '00:30',
                    preco: '80',
                },
                {
                    descricao: 'Escova',
                    duracao: '00:45',
                    preco: '60',
                },
            ],
            start: new Date(2021, 4, 24, 6, 30, 0, 0),
            end: new Date(2021, 4, 24, 9, 0, 0, 0),
        },
        {
            title: 'Corte cabelo',
            resourceId: 'Fulana',
            client: 'Juliana',
            status: 'Finalizado',
            img: 'https://i.pravatar.cc/500',
            servicos: [
                {
                    descricao: 'Unhas',
                    duracao: '00:30',
                    preco: '80',
                },
                {
                    descricao: 'Escova',
                    duracao: '00:45',
                    preco: '60',
                },
            ],
            start: new Date(2021, 4, 24, 12, 30, 0, 0),
            end: new Date(2021, 4, 24, 14, 30, 0, 0),
        },
    ]);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    function handleCloseEventModal() {
        setShowEventModal(false);
    }

    function handleShowEventModal() {
        setShowEventModal(true);
    }

    function handleCloseStopAttendanceModal() {
        setShowEventModal(false);
    }

    function handleShowStopAttendanceModal() {
        setShowEventModal(true);
    }

    const clients = [
        { value: 1, label: 'Maria' },
        { value: 2, label: 'Celso' },
        { value: 3, label: 'Julia' },
    ];

    const positions = [
        { value: 1, label: 'Barbeiro' },
        { value: 2, label: 'Cabeleireiro' },
        { value: 3, label: 'Esteticista' },
    ];

    const preferences = [
        { value: 1, label: 'Comanda aberta' },
        { value: 2, label: 'Indicação' },
        { value: 3, label: 'Noivas' },
        { value: 4, label: 'Normal' },
        { value: 5, label: 'Preferencial' },
        { value: 6, label: 'Primeira vez' },
    ];

    const hours = [
        { value: 1, label: '8:00' },
        { value: 2, label: '8:30' },
        { value: 3, label: '9:00' },
        { value: 4, label: '9:30' },
        { value: 5, label: '10:00' },
        { value: 6, label: '10:30' },
        { value: 7, label: '11:00' },
        { value: 8, label: '11:30' },
        { value: 9, label: '12:00' },
        { value: 10, label: '12:30' },
    ];

    const services = [
        { value: 1, label: 'Unhas' },
        { value: 2, label: 'Barba' },
        { value: 3, label: 'Corte' },
    ];

    const artists = [
        { value: 1, label: 'Luciano' },
        { value: 2, label: 'Marcio' },
        { value: 3, label: 'Maria' },
    ];

    const clientsData = [
        { value: 1, label: 'Luciano' },
        { value: 2, label: 'Marcio' },
        { value: 3, label: 'Maria' },
    ];

    const formRef = useRef<FormHandles>(null);

    const handleCreateEventSubmit: SubmitHandler<IEventFormData> = async data => {
        /* setEvents([
            ...events,
            {
                cellPhone: data.cellPhone,
                client: data.client.label,
                preference: data.preference.label,
                start: new Date(eventData.start.setHours(data.hour.value)),
                servicos: data.services,
                img: 'https://i.pravatar.cc/500',
            },
        ]); */
    };

    /*  const events = [
        {
            title: 'Corte cabelo',
            start: moment().toDate(),
            end: moment().add(90, 'minutes').toDate(),
        },
        {
            title: 'Corte cabelo',
            start: moment().toDate(),
            end: moment().add(120, 'minutes').toDate(),
        },
        {
            title: 'Corte cabelo',
            start: moment().toDate(),
            end: moment().add(90, 'minutes').toDate(),
        },
        {
            title: 'Corte cabelo',
            start: moment().toDate(),
            end: moment().add(90, 'minutes').toDate(),
        },
        {
            title: 'Corte cabelo',
            start: moment().toDate(),
            end: moment().add(90, 'minutes').toDate(),
        },
    ];
 */

    const resources = [
        {
            id: 'Luciano',
            title: 'Luciano',
            position: 'Cabeleireiro',
            img: 'https://i.pravatar.cc/500',
        },
        {
            id: 'Jessica',
            title: 'Jessica',
            position: 'Maquiadora',
            img: 'https://i.pravatar.cc/500',
        },
        {
            id: 'Marcia',
            title: 'Marcia',
            position: 'Cabeleleira',
            img: 'https://i.pravatar.cc/500',
        },
        {
            id: 'Alan',
            title: 'Alan',
            position: 'Esteticista',
            img: 'https://i.pravatar.cc/500',
        },
        {
            id: 'Fulana',
            title: 'Fulana',
            position: 'Manicure',
            img: 'https://i.pravatar.cc/500',
        },
        {
            id: 'Beltrano',
            title: 'Beltrano',
            position: 'Cabeleireiro',
            img: 'https://i.pravatar.cc/500',
        },
        {
            id: 'Ciclano',
            title: 'Ciclano',
            position: 'Cabeleireiro',
            allday: 'off',
            img: 'https://i.pravatar.cc/500',
        },
        {
            id: 'Fulaninho',
            title: 'Fulaninho',
            position: 'Cabeleireiro',
            img: 'https://i.pravatar.cc/500',
        },
        {
            id: 'Beltraninho',
            title: 'Beltraninho',
            position: 'Cabeleireiro',
            img: 'https://i.pravatar.cc/500',
        },
    ];

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const buttonRight = document.getElementById(
            'slideRight',
        ) as HTMLButtonElement;
        const buttonLeft = document.getElementById(
            'slideLeft',
        ) as HTMLButtonElement;

        buttonRight.onclick = () => {
            document.getElementsByClassName(
                'rbc-time-content',
            )[0].scrollLeft += 300;
        };
        buttonLeft.onclick = () => {
            document.getElementsByClassName(
                'rbc-time-content',
            )[0].scrollLeft -= 300;
        };

        const EventList = Array.from(
            document.getElementsByClassName(
                'rbc-event',
            ) as HTMLCollectionOf<HTMLElement>,
        );

        EventList.forEach(item => {
            const { left, width, height } = item.style;
            const siblings =
                item.parentElement &&
                Array.from(item.parentElement.children)
                    .filter(c => c !== item)
                    .map(item => item as HTMLElement);

            item.addEventListener('mouseover', () => {
                siblings?.forEach(item => {
                    item.style.display = 'none';
                });
                item.style.height = 'auto';
                item.style.width = '100%';
                item.style.left = '0';
                item.style.zIndex = '999';
            });

            item.addEventListener('mouseout', () => {
                siblings?.forEach(item => {
                    item.style.display = 'block';
                });
                item.style.height = height;
                item.style.width = width;
                item.style.left = left;
                item.style.zIndex = '';
            });
        });

        /*   EventList.forEach(item => {
            const size = item.style.height;

            item.addEventListener('mouseover', () => {
                item.style.height = 'auto';
            });
            item.addEventListener('mouseout', () => {
                item.style.height = size;
            });
        }); */

        /* return () => {}; */

        /*    const target = document.getElementsByClassName('rbc-time-content')[0];

        const scrollListener = () => {
            const windowScroll = target.scrollLeft; // Distance of the scrollbar from the leftmost point
            const totalWidth = target.scrollWidth - target.clientWidth; // Total width the scrollbar can traverse

            if (windowScroll === 0) {
                setScrollProgress(0);
            }

            if (windowScroll > totalWidth) {
                setScrollProgress(100);
            }

            setScrollProgress((windowScroll / totalWidth) * 100);
        };

        target.addEventListener('touchmove', scrollListener);

        return () => {
            target.removeEventListener('touchmove', scrollListener);
        }; */
    });

    const [date, setDate] = useState(new Date());
    const [reload, setReload] = useState(false);

    const speakerEdit = <Popover title="Editar" />;
    const speakerPlay = <Popover title="Iniciar atendimento" />;
    const speakerStop = <Popover title="Finalizar atendimento" />;
    const speakerConfirm = <Popover title="Confirmar agendamento" />;
    const speakerCancel = <Popover title="Cancelar horário de atendimento" />;
    const speakerClientIsHere = <Popover title="Cliente chegou" />;

    return (
        <Container>
            <h1>Agenda</h1>
            <FilterContainer>
                <DatePicker
                    selected={date}
                    onChange={(date: Date) => date && setDate(date)}
                />

                <ComboBox
                    classNamePrefix="react-select"
                    options={artists}
                    isSearchable
                    defaultValue={{
                        label: 'Filtro por artista',
                        value: 0,
                    }}
                    blurInputOnSelect
                    openMenuOnFocus
                />
                <ComboBox
                    classNamePrefix="react-select"
                    options={positions}
                    defaultValue={{
                        label: 'Filtro por função',
                        value: 0,
                    }}
                    isSearchable
                    blurInputOnSelect
                    openMenuOnFocus
                />
                <ComboBox
                    classNamePrefix="react-select"
                    options={clientsData}
                    isSearchable
                    defaultValue={{
                        label: 'Filtro por cliente',
                        value: 0,
                    }}
                    blurInputOnSelect
                    openMenuOnFocus
                />
            </FilterContainer>

            <Drawer show={show} onHide={handleClose}>
                <Drawer.Header>
                    <Drawer.Title>Novo Agendamento</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <CreateEventForm
                        id="form"
                        onSubmit={handleCreateEventSubmit}
                        ref={formRef}
                    >
                        <FieldSet title="Cliente">
                            <Select
                                label="Cliente"
                                name="client"
                                classNamePrefix="react-select"
                                options={clients}
                                isSearchable
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                            <Select
                                label="Preferência"
                                name="preference"
                                classNamePrefix="react-select"
                                options={preferences}
                                isSearchable
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                            <Select
                                label="Horário"
                                name="hour"
                                classNamePrefix="react-select"
                                options={hours}
                                isSearchable
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                            <MaskedInput
                                mask="(99) 9 9999-9999"
                                name="cellPhone"
                                label="Celular"
                            />
                        </FieldSet>
                        <FieldSet title="Serviço(s)">
                            <Select
                                label="Descrição"
                                name="service"
                                classNamePrefix="react-select"
                                options={services}
                                isSearchable
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                            <MaskedInput
                                mask="99:99"
                                name="time"
                                label="Duração"
                            />
                            <MaskedInput
                                mask="R$ 999,99"
                                name="value"
                                label="Valor"
                            />
                            <div>
                                <button>Incluir mais serviços</button>
                            </div>
                        </FieldSet>
                    </CreateEventForm>
                </Drawer.Body>
                <Drawer.Footer>
                    <ButtonContainer>
                        <button
                            className="fibre-button fibre-button--cancel"
                            type="button"
                            onClick={handleClose}
                        >
                            Cancelar
                        </button>
                        <button
                            className="fibre-button fibre-button--cancel"
                            type="submit"
                            form="form"
                        >
                            Salvar
                        </button>
                    </ButtonContainer>
                </Drawer.Footer>
            </Drawer>

            {/*       <Calendar
                localizer={localizer}
                toolbar={false}
                formats={{
                    dateFormat: 'dd',
                    dayFormat: (date: any, culture: any, localizer: any) =>
                        localizer.format(date, 'dddd', culture),
                }}
                events={events}
                defaultDate={moment().toDate()}
                defaultView="week"
                selectable
                popup
                style={{ height: 600 }}
            /> */}

            <CalendarContainer>
                <div>
                    <button id="slideLeft" type="button">
                        <MdKeyboardArrowLeft />
                    </button>
                    <button id="slideRight" type="button">
                        <MdKeyboardArrowRight />
                    </button>
                </div>
                <Calendar
                    toolbar={false}
                    components={{
                        resourceHeader: ({ resource, index }) => {
                            const {
                                title,
                                position,
                                img,
                            } = resource as IResource;

                            return (
                                <ResourceHeader key={index}>
                                    <img src={img} alt="avatar" />
                                    <strong>{title}</strong>
                                    <p>{position}</p>
                                </ResourceHeader>
                            );
                        },
                        event: ({ event }) => {
                            const {
                                title,
                                status,
                                resourceId,
                                client,
                                servicos,
                                start,
                                end,
                                img,
                            } = event as IEvent;

                            const duration = moment.duration(
                                moment(end).diff(moment(start)),
                            );

                            let total = 0;

                            return (
                                <EventContainer>
                                    <Event
                                        status={status}
                                        onClick={handleShowEventModal}
                                    >
                                        <p>{client}</p>
                                        {`${moment(start, 'HHmmss').format(
                                            'HH:mm',
                                        )} - ${moment(end, 'HHmmss').format(
                                            'HH:mm',
                                        )} -> `}
                                        {status}
                                        {/*  <ul>
                                            {servicos.map(service => (
                                                <li>{service.descricao}</li>
                                            ))}
                                        </ul> */}
                                        <MenuContainer>
                                            <Whisper
                                                placement="bottom"
                                                trigger="hover"
                                                speaker={speakerCancel}
                                            >
                                                <BiCalendarX />
                                            </Whisper>
                                            <Whisper
                                                placement="bottom"
                                                trigger="hover"
                                                speaker={speakerClientIsHere}
                                            >
                                                <BiCalendarExclamation />
                                            </Whisper>
                                            <Whisper
                                                placement="bottom"
                                                trigger="hover"
                                                speaker={speakerEdit}
                                            >
                                                <BiCalendarEdit />
                                            </Whisper>
                                            <Whisper
                                                placement="bottom"
                                                trigger="hover"
                                                speaker={speakerConfirm}
                                            >
                                                <BiCalendarCheck />
                                            </Whisper>
                                            <Whisper
                                                placement="bottom"
                                                trigger="hover"
                                                speaker={speakerPlay}
                                            >
                                                <MdPlayCircleOutline />
                                            </Whisper>
                                        </MenuContainer>
                                    </Event>
                                    <Modal
                                        show={showEventModal}
                                        onHide={handleCloseEventModal}
                                        overflow
                                    >
                                        <Modal.Header>
                                            <Modal.Title>
                                                {`${moment(
                                                    start,
                                                    'HHmmss',
                                                ).format('HH:mm')} - ${moment(
                                                    end,
                                                    'HHmmss',
                                                ).format('HH:mm')} -> `}
                                                {status}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <img src={img} alt="avatar" />
                                            <div>
                                                <p>{client}</p>
                                                <ul>
                                                    {servicos.map(service => (
                                                        <li>
                                                            {service.descricao}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div>
                                                    <div>
                                                        <MdAccessTime />
                                                        <span>
                                                            {`${duration.hours()}h:${duration.minutes()}min`}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <RiMoneyDollarCircleLine />
                                                        <span>
                                                            {servicos.forEach(
                                                                service => {
                                                                    total += parseInt(
                                                                        service.preco,
                                                                    );
                                                                },
                                                            )}
                                                            {total}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <MenuContainer>
                                                <Whisper
                                                    placement="bottom"
                                                    trigger="hover"
                                                    speaker={speakerCancel}
                                                >
                                                    <BiCalendarX />
                                                </Whisper>
                                                <Whisper
                                                    placement="bottom"
                                                    trigger="hover"
                                                    speaker={
                                                        speakerClientIsHere
                                                    }
                                                >
                                                    <BiCalendarExclamation />
                                                </Whisper>
                                                <Whisper
                                                    placement="bottom"
                                                    trigger="hover"
                                                    speaker={speakerEdit}
                                                >
                                                    <BiCalendarEdit />
                                                </Whisper>
                                                <Whisper
                                                    placement="bottom"
                                                    trigger="hover"
                                                    speaker={speakerConfirm}
                                                >
                                                    <BiCalendarCheck />
                                                </Whisper>
                                                <Whisper
                                                    placement="bottom"
                                                    trigger="hover"
                                                    speaker={speakerPlay}
                                                >
                                                    <MdPlayCircleOutline />
                                                </Whisper>
                                                <Whisper
                                                    placement="bottom"
                                                    trigger="hover"
                                                    speaker={speakerStop}
                                                    onClick={
                                                        handleShowStopAttendanceModal
                                                    }
                                                >
                                                    <BiStopCircle />
                                                </Whisper>
                                            </MenuContainer>
                                        </Modal.Footer>
                                    </Modal>
                                </EventContainer>
                            );
                        },
                    }}
                    localizer={localizer}
                    events={events}
                    defaultView="day"
                    onSelectSlot={selectData => {
                        handleShow();
                        setEventData({
                            ...eventData,
                            end: new Date(selectData.start),
                            start: new Date(selectData.start),
                        });
                    }}
                    selectable
                    popup
                    resources={resources}
                    date={date}
                    defaultDate={new Date(2021, 4, 24)}
                />
            </CalendarContainer>
            <Modal
                show={showAttendanceModal}
                onHide={handleCloseStopAttendanceModal}
                overflow
            >
                <Modal.Header>
                    <Modal.Title />
                </Modal.Header>
                <Modal.Body>
                    <h1>fff</h1>
                </Modal.Body>
                <Modal.Footer />
            </Modal>

            {console.log(showAttendanceModal)}
        </Container>
    );
};

export default Schedule;

/* https://react-bootstrap.github.io/components/offcanvas/ */
