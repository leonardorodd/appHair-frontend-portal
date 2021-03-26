/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Container } from './styles';

const SectionButton: React.FC = ({ ...rest }) => {
    return <Container {...rest} />;
};

export default SectionButton;
