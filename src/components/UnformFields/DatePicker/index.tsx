/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker, {
    ReactDatePickerProps,
    registerLocale,
} from 'react-datepicker';
import MaskedTextInput from 'react-text-mask';
import ReactInputMask, { Props as ReactInputProps } from 'react-input-mask';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt-BR';
import { Container } from './styles';

registerLocale('pt', pt);
interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
    name: string;
    label?: string;
}
const DatePicker: React.FC<Props> = ({ name, label, ...rest }) => {
    const datepickerRef = useRef(null);
    const { fieldName, registerField, defaultValue = '', error } = useField(
        name,
    );
    const [date, setDate] = useState(defaultValue || null);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: datepickerRef.current,
            path: 'props.selected',
            clearValue: (ref: any) => {
                ref.clear();
            },
        });
    }, [fieldName, registerField]);
    return (
        <Container>
            {label && <label htmlFor={fieldName}>{label}</label>}
            <ReactDatePicker
                id={fieldName}
                ref={datepickerRef}
                selected={date}
                onChange={setDate}
                locale="pt"
                dateFormat="dd/MM/yyyy"
                customInput={<ReactInputMask mask="99/99/9999" />}
                {...rest}
            />
        </Container>
    );
};
export default DatePicker;
