import React from 'react';
import { BsPeopleCircle } from 'react-icons/bs';
import Toggle from '../Toggle';
import { Container, Profile, Welcome } from './styles';
import Dropdown from '../Dropdown';

const MainHeader: React.FC = () => {
    const profileMenu = [
        {
            title: 'Perfil',
            link: '',
            externalLink: false,
        },
        {
            title: 'Teste1',
            link: '',
            externalLink: false,
        },
        {
            title: 'Teste2',
            link: '',
            externalLink: false,
        },
    ];

    return (
        <Container>
            {/*             <Toggle />
             */}
            <div />
            <Profile>
                <BsPeopleCircle size={25} />
                <Dropdown title="Anderson Tartari" options={profileMenu} />
            </Profile>
            {/* <Profile>
                <Welcome>Olá, Anderson.</Welcome>
            </Profile> */}
        </Container>
    );
};

export default MainHeader;
