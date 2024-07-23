import React, {ReactNode, useState} from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import styles from './AppLayout.module.css'

import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillPlaySquare } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import {ReactComponent as Logo} from '../../../logo.svg'

const NAV_LINKS = [
    {
        title: 'Home',
        icon: <AiFillHome />
    },
    {
        title: 'Search',
        icon: <AiOutlineSearch />
    },
    {
        title: 'TV Shows',
        icon: <AiFillYoutube />
    },
    {
        title: 'Movies',
        icon: <AiFillPlaySquare />
    },
    {
        title: 'New & Popular',
        icon: <AiFillStar />
    },
    {
        title: 'My List',
        icon: <AiFillFolder />
    },
]

type IProps = {
    children: ReactNode;
}

const AppLayout: React.FC<IProps> = ({children}) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <div
            className={styles.wrapper}
        >
            <Sidebar
                collapsed={isCollapsed}
                backgroundColor={'none'}
                rootStyles={{
                    borderColor: '#29292c',
                    color: "white",
                    position: "sticky",
                    height: '100vh',
                    top: '0px',
                }}
                onMouseOver={() => setIsCollapsed(false)}
                onMouseOut={() => setIsCollapsed(true)}
            >
                <Menu
                    menuItemStyles={{
                        button: {
                            [`&.active`]: {},
                            ['&:hover']: {
                                backgroundColor: "red",
                            },
                        },
                    }}
                    rootStyles={{
                        height: '100%',
                        '&ul': {
                            height: '100%',
                        },
                    }}
                    className={styles.menu}
                >
                    <Logo className={styles.logo} />
                    {NAV_LINKS.map((navLink) => (
                        <MenuItem
                            key={navLink.title}
                            icon={navLink.icon}
                        >
                            {navLink.title}
                        </MenuItem>
                    ))}
                    <MenuItem
                        rootStyles={{marginTop: "auto"}}
                        icon={<AiOutlineUser />}
                    >
                        Profile
                    </MenuItem>
                    <MenuItem icon={<AiFillSetting />}>Settings</MenuItem>
                </Menu>
            </Sidebar>
            {children}
        </div>
    )
}

export default AppLayout