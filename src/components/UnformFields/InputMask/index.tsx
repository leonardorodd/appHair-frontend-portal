/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { FaSpinner } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import { Container } from './styles';

interface Props extends InputProps {
    name: string;
    loading?: boolean;
    showLoadingIcon?: boolean;
    textTransform?: 'lowercase' | 'uppercase' | 'capitalize';
    label?: string;
    labelIcon?: React.FC<IconBaseProps>;
    onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
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

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                ref.setInputValue(value);
            },
            clearValue(ref: any) {
                ref.setInputValue('');
            },
        });
    }, [fieldName, registerField]);

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
                    onChange={event => {
                        if (onChangeCallback) {
                            onChangeCallback(event);
                        }
                    }}
                    style={{ borderColor: error ? '#db3b21' : '' }}
                    disabled={loading}
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
