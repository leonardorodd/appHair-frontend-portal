/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { MdErrorOutline } from 'react-icons/md';
import { Container } from './styles';

import { capitalizeString } from '../../../utils/masks';

interface Props {
    name: string;
    textTransform?: 'lowercase' | 'uppercase' | 'capitalize';
    label: string;
    labelIcon?: React.FC<IconBaseProps>;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({
    name,
    label,
    textTransform,
    labelIcon: LabelIcon,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
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
    return (
        <Container textTransform={textTransform || 'capitalize'}>
            {label && (
                <div>
                    <label
                        style={{ color: error ? '#db3b21' : '' }}
                        htmlFor={fieldName}
                    >
                        {label}
                    </label>
                    {LabelIcon && <LabelIcon />}
                </div>
            )}
            <input
                id={fieldName}
                ref={inputRef}
                style={{ borderColor: error ? '#db3b21' : '' }}
                defaultValue={defaultValue}
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
export default Input;
