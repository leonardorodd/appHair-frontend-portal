/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/media-has-caption */
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

interface Props {
    name: string;
    label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const FileInput: React.FC<InputProps> = ({ name, label, ...rest }) => {
     const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
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
            clearValue(ref: HTMLInputElement) {
                ref.value = '';
                setSelectedFile(null);
            }
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <label htmlFor={fieldName}>
                {label && <p>{label}</p>}
                {selectedFile && (selectedFile.type.includes('image') ? (
                    <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="imagem"
                    />
                ) : (
                    <video
                        id="video"
                        src={URL.createObjectURL(selectedFile)}
                        controls
                    />
                ))}
                <input
                    type="file"
                    id={fieldName}
                    ref={inputRef}
                    onChange={handlePreview}
                    accept="image/*, video/*"
                    {...rest}
                />
            </label>
        </Container>
    );
};

export default FileInput;
