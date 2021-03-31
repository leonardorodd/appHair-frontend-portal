/* eslint-disable prettier/prettier */
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
    label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const ImageInput: React.FC<InputProps> = ({ name, label, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue = imagePlaceholder, error } = useField(name);
    const [selectedFile, setSelectedFile] = useState<File | null>();

    const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(file) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'files[0]',
            clearValue() {
                setSelectedFile(null);
            }
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <label
                htmlFor={fieldName}
                className="fibre-button fibre-button--cancel"
            >
                <input
                    type="file"
                    id={fieldName}
                    ref={inputRef}
                    onChange={handlePreview}
                    accept="image/*"
                    {...rest}
                />
                {label}
            </label>
        </Container>
    );
};

export default ImageInput;
