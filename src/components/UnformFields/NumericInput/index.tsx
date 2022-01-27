/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { MdErrorOutline } from 'react-icons/md';
import { Container, ButtonContainer } from './styles';

interface Props {
    name: string;
    label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const NumericInput: React.FC<InputProps> = ({ name, label, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(1);
    const {
        fieldName,
        defaultValue,
        registerField,
        error,
        clearError,
    } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            path: 'value',
            ref: inputRef.current,
        });
    }, [fieldName, registerField]);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        value > 1 && setValue(value - 1);
    };

    return (
        <Container>
            {label && (
                <div>
                    <label
                        style={{ color: error ? '#db3b21' : '' }}
                        htmlFor={fieldName}
                    >
                        {label}
                    </label>
                </div>
            )}
            <ButtonContainer>
                <button type="button" onClick={handleDecrement}>
                    -
                </button>
                <input
                    id={fieldName}
                    ref={inputRef}
                    value={value || ''}
                    onBlur={event => {
                        event.target.value === '' && setValue(1);
                    }}
                    onChange={event =>
                        new RegExp('^[0-9]*$').test(event.target.value) &&
                        setValue(Number(event.target.value))
                    }
                    style={{ borderColor: error ? '#db3b21' : '' }}
                    defaultValue={defaultValue}
                    {...rest}
                />
                <button type="button" onClick={handleIncrement}>
                    +
                </button>
            </ButtonContainer>
            {/*   {error && (
                <span style={{ color: '#db3b21', marginBottom: '2px' }}>
                    <MdErrorOutline size={14} style={{ marginRight: '3px' }} />
                    {error}
                </span>
            )} */}
        </Container>
    );
};
export default NumericInput;
