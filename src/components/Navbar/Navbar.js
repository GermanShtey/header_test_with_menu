import React, {useState} from "react";
import './Navbar.css';
import {Logo} from "../Icons/Logo";
import {Navigation} from "../Navigation/Navigation";
import {Link} from "../Link/Link";
import {EnterIcon} from "../Icons/LogoutIcon";
import {Button} from "../Button/Button";
import {MenuIcon} from "../Icons/MenuIcon";
import {CrossIcon} from "../Icons/CrossIcon";
import createClassName from "../../utils/createClassName";

export const Navbar = ({theme, loggedIn}) => {
  const[isOpen, setIsOpen] = useState(false);
  const navbarClassName = createClassName('navbar', ``)

  return (
  <div className={`${navbarClassName} ${isOpen && 'navbar_theme_black'}`}>
    <picture className='logo header__logo'>
      <Logo classNamePath={`logo_theme_${theme}`}/>
    </picture>
    <Navigation
      classNameList={`nav__list_header header__nav ${isOpen && 'navbar_nav-bg nav__list_open'}`}
    >

      <Link
        className={`link_type_${theme} header__link`}
        activeClassName={`link_type_${theme}-active`}
        text={ 'Главная' }
        to={'/'}
        exact
      />

      { loggedIn
        ? <Link
          className={`link_type_${theme} header__link`}
          activeClassName={`link_type_${theme}-active`}
          text={'Сохранённые статьи'}
          to={'/saved-news'}
        /> : null }

      <Link
        className={`link_type_border link_type_border-${theme} header__link`}
        text={ loggedIn ? 'Грета' : 'Авторизоваться' }
        to={'/foo'}
      >
        { loggedIn && <EnterIcon
          classNamePath={`link__icon-${theme}`}
        /> }
      </Link>

    </Navigation>
    <Button
      className={'button_type_menu'}
      onClick={() => setIsOpen(!isOpen)}
    >
      {
        isOpen
          ? <CrossIcon/>
          : <MenuIcon/>
      }
    </Button>
  </div>
  )
}
