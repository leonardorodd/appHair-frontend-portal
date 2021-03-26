/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import ReactInputMask, { Props as ReactInputProps } from 'react-input-mask';
import { FaSpinner } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { MdErrorOutline } from 'react-icons/md';
import { Container } from './styles';

interface Props {
    name: string;
    loading?: boolean;
    showLoadingIcon?: boolean;
    textTransform?: 'lowercase' | 'uppercase' | 'capitalize';
    label?: string;
    labelIcon?: React.FC<IconBaseProps>;
    onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type InputProps = ReactInputProps & Props;
const Input: React.FC<InputProps> = ({
    name,
    label,
    loading,
    textTransform,
    showLoadingIcon,
    labelIcon: LabelIcon,
    onChangeCallback,
    ...rest
}) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            getValue() {
                return value;
            },
            clearValue() {
                setValue('');
            },
        });
    }, [fieldName, registerField, value]);
    return (
        <Container
            textTransform={textTransform || 'capitalize'}
            loading={loading}
        >
            {label && (
                <div>
                    <label
                        htmlFor={fieldName}
                        style={{ color: error ? '#db3b21' : '' }}
                    >
                        {label}
                    </label>
                    {LabelIcon && <LabelIcon />}
                </div>
            )}
            <div>
                <ReactInputMask
                    ref={inputRef}
                    defaultValue={defaultValue}
                    value={value}
                    style={{ borderColor: error ? '#db3b21' : '' }}
                    disabled={loading}
                    onChange={event => {
                        if (onChangeCallback) {
                            onChangeCallback(event);
                        }

                        setValue(event.target.value);
                    }}
                    {...rest}
                />
                {showLoadingIcon && loading && <FaSpinner id="loadingIcon" />}
            </div>
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
