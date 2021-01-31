import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import ligth from './styles/themes/ligth';
import Routes from './routes';

const App: React.FC = () => (
    <ThemeProvider theme={ligth}>
        <Routes />
        <GlobalStyle />
    </ThemeProvider>
);

export default App;
