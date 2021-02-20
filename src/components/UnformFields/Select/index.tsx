/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import ReactSelect, {
    OptionTypeBase,
    Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import { MdErrorOutline } from 'react-icons/md';
import { Container } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
    name: string;
    label?: string;
}

const Select: React.FC<Props> = ({ name, label, ...rest }) => {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            setValue: (ref, value) => {
                ref.state.value = value;
            },
            getValue: ref => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }
                    return ref.state.value.map(
                        (option: OptionTypeBase) => option.value,
                    );
                }
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value;
            },
        });
    }, [fieldName, registerField, rest.isMulti]);

    return (
        <Container>
            {label && (
                <label
                    style={{ color: error ? '#db3b21' : '' }}
                    htmlFor={fieldName}
                >
                    {label}
                </label>
            )}

            <ReactSelect
                id={fieldName}
                className={error ? 'react-select__value-container--error' : ''}
                style={{ borderColor: error ? '#db3b21' : '' }}
                defaultValue={defaultValue}
                ref={selectRef}
                classNamePrefix="react-select"
                {...rest}
            />
            {error && (
                <span style={{ color: '#db3b21', marginBottom: '2px' }}>
                    <MdErrorOutline size={14} style={{ marginRight: '3px' }} />
                    {error}
                </span>
            )}
        </Container>
    );
};

export default Select;
