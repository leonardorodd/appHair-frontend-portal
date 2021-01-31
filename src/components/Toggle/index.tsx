import React from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => {
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                uncheckedIcon={false}
                checkedIcon={false}
                checked
                onChange={() => console.log('mudou')}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
};

export default Toggle;
