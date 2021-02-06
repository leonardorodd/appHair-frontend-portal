/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
    ChangeEvent,
    useRef,
    useEffect,
    useCallback,
    useState,
} from 'react';

import { useField } from '@unform/core';
import { Container } from './styles';
import imagePlaceholder from '../../../assets/images/imagePlaceholder.png';

interface Props {
    name: string;
    label: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const ImageInput: React.FC<InputProps> = ({ name, label, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [preview, setPreview] = useState(defaultValue);

    const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) {
            setPreview(null);
        } else {
            const previewURL = URL.createObjectURL(file);
            setPreview(previewURL);
        }
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'files[0]',
            clearValue(ref: HTMLInputElement) {
                ref.value = '';
                setPreview(null);
            },
            setValue(_: HTMLInputElement, value: string) {
                setPreview(value);
            },
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <label htmlFor={fieldName}>
                <img src={preview || imagePlaceholder} alt="profile" />
                <input
                    type="file"
                    id={fieldName}
                    ref={inputRef}
                    accept="image/*"
                    onChange={handlePreview}
                    {...rest}
                />
                {label || ''}
            </label>
        </Container>
    );
};

export default ImageInput;
