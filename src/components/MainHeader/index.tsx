import React from 'react';
import { BsPeopleCircle } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';
import Toggle from '../Toggle';
import { Container, Profile, Welcome } from './styles';
import Dropdown from '../Dropdown';
import ProfilePhoto from '../../assets/images/profile.jpg';

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
            <button className="toggleMenu" type="button">
                <MdMenu size={22} />
            </button>
            <div />
            <Profile>
                {/*                 <BsPeopleCircle size={25} />
                 */}
                <Dropdown title="Anderson Tartari" options={profileMenu} />
                <img src={ProfilePhoto} alt="profile" />
            </Profile>
            {/* <Profile>
                <Welcome>Olá, Anderson.</Welcome>
            </Profile> */}
        </Container>
    );
};

export default MainHeader;
