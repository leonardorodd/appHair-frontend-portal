import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import ImagePlaceholder from '../../../assets/images/imagePlaceholder.png';

import { Container } from './styles';

type InputProps = JSX.IntrinsicElements['input'];

const AvatarInput: React.FC<InputProps> = () => {
    const { defaultValue, registerField } = useField('avatar');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'avatar_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleOnChange(e: any) {
        const data = new FormData();

        data.append('file', e.target.files[0]); // [0] porque ele aceita vários arquivos

        console.log(data.get('file'));

        const fr = new FileReader();

        fr.onload = () => {
            const element = document.getElementById('pic') as HTMLImageElement;
            element.setAttribute('src', `${fr.result}`);
        };

        fr.readAsDataURL(e.target.files[0]);

        // const response = await api.post('/files', data)

        // const { id, url } = response.data;

        // setFile(id);
        // setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="avatar">
                <img id="pic" src={preview || ImagePlaceholder} alt="" />
                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    data-file={file}
                    onChange={handleOnChange}
                    ref={ref}
                />
            </label>
        </Container>
    );
};

export default AvatarInput;
