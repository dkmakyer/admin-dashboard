import { useState, useEffect, useMemo } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBoxes, faChartBar, faChartLine, faDownLong, faUser  } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons/faMoneyBill1Wave';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname); 
    const [currentLocation, setCurrentLocation] = useState("DASHBOARD");

    useEffect(()=> {
        const displayLocation = location.pathname.split("/");
        let lastLocationItem = displayLocation[displayLocation.length -1] === "" ? "DASHBOARD" : displayLocation[displayLocation.length -1].toUpperCase();
        setCurrentLocation(lastLocationItem);
        setActive(location.pathname);
    }, [location]);

    const routes = useMemo(() => [
        { path: '/', icon: faBoxes, label: 'Tiles' },
        { path: '/charts', icon: faChartBar, label: 'Chart' },
        { path: '/profitsAndLoss', icon: faMoneyBill1Wave, label: 'P&L'},
        { path: '/trends', icon: faChartLine, label: 'Trends' },
    ], []);

    return (
        <>
            <div className="header-container relative w-[85%] h-[10%] flex flex-row p-4 text-[14px] z-[100] translate-x-[-0.2rem]">
                <div className="first-half flex flex-row justify-between w-[40%]">
                    <h1 className='text-[20px] font-bold translate-y-[-4px]'>{currentLocation}</h1>
                    {currentLocation === "DASHBOARD" && (routes.map(({ path, icon, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={`flex items-center ${active === path ? "active-header-route" : ""}`}
                        >
                            <FontAwesomeIcon icon={icon} /> {label} {active === path ? <span className='active-bottom'></span> : null}
                        </NavLink>
                    )))}
                </div>
                <div className="last-half absolute right-14 flex flex-row justify-evenly w-[20%]">
                    <div className='w-[30%] flex flex-row items-center'>
                        <FontAwesomeIcon icon={faBell} className='text-yellow-500' />
                        <p className='w-[50%] rounded bg-yellow-300 pl-[5px] translate-x-[-3px]'>233</p>
                    </div>
                    <div className='flex flex-row items-center justify-between w-[60%]'>
                        <span className='flex items-center pl-[9px] rounded-[50%] text-white w-[30px] h-[30px] bg-blue-500'>
                            <FontAwesomeIcon icon={faUser } />
                        </span>
                        <p>Demo Account</p>
                        <FontAwesomeIcon icon={faDownLong} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;