import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

import { Container } from './styles';

const WebcamCapture: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    const capture = React.useCallback(() => {
        if (webcamRef.current !== null) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
        }
    }, [webcamRef, setImgSrc]);

    return (
        <Container>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button type="button" onClick={capture}>
                Capture photo
            </button>
            {imgSrc && <img alt="screenshotPreview" src={imgSrc} />}
        </Container>
    );
};

export default WebcamCapture;
