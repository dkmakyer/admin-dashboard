import {useState} from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBank,faDashboard, faExclamation, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faLetterboxd, faProductHunt } from '@fortawesome/free-brands-svg-icons';


const SideBar = () => {
  const [active, setActive] = useState(null);
  
  const routes = [
    { path: '/', icon: faDashboard, label: 'Dashboard', fontawesomeClass: ""},
    { path: '/products', icon: faProductHunt, label: 'Products', fontawesomeClass: ""},
    { path: '/inventory', icon: faBank, label: 'Inventory', fontawesomeClass: ""},
    { path: '/reports', icon: faLetterboxd, label: 'Reports', fontawesomeClass: ""},
    { path: '/alerts', icon: faExclamation, label: 'Alerts', fontawesomeClass: "translate-x-[5px]"},
    { path: '/settings', icon: faToolbox, label: 'Settings', fontawesomeClass: ""},
  ];

  function setIsActive(path){
    setActive(path);
  }

  return (
    <>
    <div className="sidebar-container min-h-[100vh] max-w-[250px] p-4 text-slate-100 text-[17px]">
      <h1 className='text-[20px]'>BC MANAGEMENT VENDOR-BOARD</h1>
      <div className="routes grid grid-cols-1 gap-[2rem] max-w-[250px] mt-[2rem]">
        {routes.map(({ path, icon, label, fontawesomeClass }) => (
          <NavLink
            key={path}
            to={path}
            className={`flex items-center justify-between ${active == path ? "active-side-route text-purple-500" : ""}`}
            onClick={() => setIsActive(path)}
          >
            <FontAwesomeIcon icon={icon} className={fontawesomeClass} />
            {label}
            <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        ))}
      </div>
    </div>
    </>
  );
};

export default SideBar;
