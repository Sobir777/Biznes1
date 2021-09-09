import React from 'react'
import { render } from "react-dom";
import cls from './Header.module.css'
import { Sidebar } from "./Sidebar";


import { BurgerIcon, SearchIcon } from '../svg'

export default function Header() {
    // const [sitSidebarStdebarStatus, seatus] = useState(false);
    // const handleClick = () => setSidebarStatus(true);

    // const handleCloseSidebar = () => setSidebarStatus(false);

    return (
        <>
            {/* <button onClick={handleClick}>abrir sidebar</button>
            {sidebarStatus && (
                <Sidebar onClick={handleCloseSidebar}>
                    <li>Home</li>
                </Sidebar>
            )} */}

            <div className={cls.navbar}>
                <div className={cls.burger} ><BurgerIcon />
                   </div>
                <div className={cls.logo}><span>Biznesrivj</span></div>
                <div className={cls.search}><SearchIcon /></div>
            </div>
            <div><div>
                aazczd
            </div>
                <div>
                    aazczd
                </div>
                <div>
                    aazczd
                </div>
                <div>
                    aazczd
                </div></div>

        </>
    )

}




