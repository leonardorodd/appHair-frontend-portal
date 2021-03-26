/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useRef, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface Props {
    name: string;
    label?: string;
    value?: string;
    onChangeCallback?: () => void;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

const Checkbox: React.FC<InputProps> = ({
    name,
    value,
    label,
    onChangeCallback,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [checked, setChecked] = useState(false);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const defaultChecked = defaultValue === value;

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.checked;
            },
            clearValue: ref => {
                ref.current.checked = defaultChecked;
            },
            setValue: (ref, value) => {
                ref.current.checked = value;
            },
        });
    }, [defaultValue, fieldName, registerField, defaultChecked]);

    return (
        <Container>
            <input
                defaultChecked={defaultChecked}
                ref={inputRef}
                value={value}
                type="checkbox"
                checked={checked}
                onChange={() => {
                    if (onChangeCallback) {
                        onChangeCallback();
                    }

                    setChecked(!checked);
                }}
                id={fieldName}
                {...rest}
            />

            <label htmlFor={fieldName} key={fieldName}>
                {label}
            </label>

            {error && <span>{error}</span>}
        </Container>
    );
};

export default Checkbox;
