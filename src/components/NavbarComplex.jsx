// Importación de React y varios componentes desde @material-tailwind/react y @heroicons/react

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import logoTec from "../img/tec.png";
import { useResizeDetector } from 'react-resize-detector';


// Definición de items del menú de perfil
const profileMenuItems = [
  {
    label: "Mis Datos",// Texto del menú
    icon: UserCircleIcon,// Ícono del menú
  },

  {
    label: "Cerrar Sesión",
    icon: PowerIcon,
  },
];


// Componente ProfileMenu para manejar el menú de perfil del usuario
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-4 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="md"
            alt="Nombre de ejemplo"
            className="border border-white p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-6 w-6 transition-transform text-white  ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded  ${isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
                }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-gray-700" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}



// Definición de los items para el Dropdown del elemento Servicio Social
const navListMenuItems = [
  {
    title: "Formatos",

  },
  {
    title: "Carta Presentación",

  },
  
];


function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false); // Nuevo estado para controlar la visibilidad del dropdown

  const { ref: resizeRef } = useResizeDetector(); // Hook para detectar cambios de tamaño


  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Función para alternar el estado del dropdown

  const renderItems = navListMenuItems.map(({ title }) => (
    <a href="#" key={title} className="block text-white lg:text-black lg:hover:bg-gray-200 rounded hover:bg-blue-800 p-2">
      {title}
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-white lg:flex lg:rounded-full">
              Servicio Social{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="w-[2rem] overflow-visible lg:grid">
          <ul className="flex w-full flex-col">{renderItems}</ul>
        </MenuList>
      </Menu>

      {/* Botón del menú desplegable para la versión móvil */}
      <div ref={resizeRef}  className="lg:hidden mx-auto">
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 font-medium text-white p-2 w-full text-left">
          Servicio Social{" "}
          <ChevronDownIcon
            strokeWidth={2}
            className={`h-4 w-4 p transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {/* Contenido del menú desplegable */}

        <div className="w-full">

        <div className={`${isDropdownOpen ? 'block' : 'hidden'}`}>
          {renderItems}
        </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}


// Componente NavList para renderizar la lista de navegación principal
const navListItems = [

  {
    label: "Residencia",// Texto del menú
    icon: CubeTransparentIcon,// Ícono del menú
  },
  {
    label: "Inglés",
    icon: CodeBracketSquareIcon,
  },
];


// Función principal NavList que construye la lista de navegación
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[20px] w-[20px]" })}{" "}
            <span className="text-gray translate-y-px"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}


// Componente principal NavbarComplex que ensambla la barra de navegación
export default function NavbarComplex() {
  const [isNavOpen, setIsNavOpen] = React.useState(false); // Estado para manejar la visibilidad de la navegación móvil
  const { ref: resizeRef } = useResizeDetector(); // Hook para detectar cambios de tamaño

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);  // Función para alternar la visibilidad de la navegación móvil

  // Efecto para cerrar la navegación móvil en cambios de tamaño de ventana
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl lg:p-0 p-2 lg:rounded-full lg:pl-6 bg-blue-700 ">
      <div className="relative mx-auto flex items-center justify-between text-white ">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium hidden lg:block "
        >

          <img src="https://www.tecnm.mx/images/tecnm_virtual/tecnm.png" alt="logo" className="h-14 w-16 " />

        </Typography>
        <div className="hidden lg:flex justify-center w-full">
          <div id="navlist">
            <NavList />
          </div>
        </div>


        <IconButton
          size="md"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className=" mr-2 ml-1 lg:hidden opacity-85	bg-blue-800 hover:bg-blue-800 focus:bg-blue-800 active:bg-blue-800 "
        >
          <Bars2Icon className="h-6 w-6 text-white" />
        </IconButton>


        <ProfileMenu />
      </div>
     <MobileNav open={isNavOpen} className="overflow-y-auto">
        {/* Usa resizeRef aquí para detectar cambios de tamaño */}
        <div ref={resizeRef}>
          <NavList />
        </div>
      </MobileNav>
    </Navbar>
  );
}