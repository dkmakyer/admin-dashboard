import {useState} from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBank,faBoxes,faChartBar,faDashboard, faExclamation, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faLetterboxd, faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';


const Header = () => {
    const [active, setActive] = useState(null);
    
    const routes = [
      { path: '/', icon: faBoxes, label: 'Tiles', fontawesomeClass: ""},
      { path: '/products', icon: faChartBar, label: 'Chart', fontawesomeClass: ""},
      { path: '/inventory', icon: faChartLine, label: 'Trends', fontawesomeClass: ""},
    ];

  function setIsActive(path){
    setActive(path);
  }

  return (
    <>
    <div className="header-container flex relative  text-[17px]">
      <h1 className='text-[20px]'>DASHBOARD</h1>
      <div className="header-routes gap-[20px] absolute mt-[2rem]">
        {routes.map(({ path, icon, label, fontawesomeClass }) => (
          <NavLink
            key={path}
            to={path}
            className={`flex items-center justify-between ${active == path ? "active text-purple-500" : ""}`}
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

export default Header;
