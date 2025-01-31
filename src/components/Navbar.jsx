import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../hooks/LanguageContext.jsx";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentLanguage, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (e) => {
    toggleLanguage(e.target.value);
  }

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Jeferson &nbsp;
            <span className='sm:block hidden'> | Aires</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{t(Link.title)}</a>
            </li>
          ))}
          <select
            value={currentLanguage}
            className='list-none hidden sm:flex flex-row gap-10 text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
            onChange={handleLanguageChange}
          >
            <option className={`${active === 'PT' ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`} value='pt'>PT</option>
            <option className={`${active === 'EN' ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`} value='en'>EN</option>
          </select>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(Link.title)}
                >
                  <a href={`#${Link.id}`}>{t(Link.title)}</a>
                </li>
              ))}
              <select
                value={currentLanguage}
                className=' sm:flex flex-row gap-10 text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
                onChange={handleLanguageChange}
              >
                <option className={`${active === 'PT' ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`} value='pt'>PT</option>
                <option className={`${active === 'EN' ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`} value='en'>EN</option>
              </select>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;