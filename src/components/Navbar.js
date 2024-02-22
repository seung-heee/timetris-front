import React, { useEffect } from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { PC, SmallPC } from "../utils/mediaQuery";


const NavBarContainer = styled.nav`
    width : 100vw;
    display : flex;
    justify-content : space-between;
    padding : 0 100px 0 100px;
    border-bottom : 1px solid #CCCCCC;
`
const Menus = styled.div`
    display : flex;
    flex-direction :row;
    justify-content : space-betwwen;
    padding : 15px 0 15px 0;
    gap : 35px;
`

const MenuItem = styled.a`
    width: 134px;
    height: 55px;
    border-radius: ${props => props.trbl};
`

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.removeItem('Authorization')
    }
    return (
        <NavBarContainer>
            {/* Profile dropdown */}
            <Menu>

                <SmallPC>
                    <img src="/img/mainLogo.svg" onClick={() => navigate('/pds')} style={{ cursor: "pointer", width: "100px" }} />
                    <Menus>
                        <img src="/img/지난기록들.svg" style={{ cursor: "pointer", width: "90px" }} />
                        <Menu.Button className="relative flex rounded-full">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-8 w-8 rounded-full"
                                src="/img/프로필아이콘.svg"
                                alt="프로필 아이콘"
                                style={{ width: "30px", height: "30px" }}
                            />
                        </Menu.Button>
                    </Menus>
                </SmallPC>

                <PC>
                    <img src="/img/mainLogo.svg" onClick={() => navigate('/pds')} style={{ cursor: "pointer" }} />
                    <Menus>
                        <Link to='/pastrecords' className="flex items-center"><img src="/img/지난기록들.svg" style={{ cursor: "pointer" }} /></Link>
                        <Menu.Button className="relative flex rounded-full">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-8 w-8 rounded-full"
                                src="/img/프로필아이콘.svg"
                                alt="프로필 아이콘"
                                style={{ width: "45px", height: "45px" }}
                            />
                        </Menu.Button>
                    </Menus>
                </PC>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute top-[60px] right-[55px] z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        style={{ width: '134px', height: '110px' }}>
                        <Menu.Item>
                            {({ active }) => (
                                <MenuItem trbl="6px 6px 0 0"
                                    href="/mypage"
                                    className={classNames(active ? 'bg-[#EDEDED]' : '', 'block px-[30px] py-[15px] text-sm[16px] text-darkgrey border-b-1 border-[#C5C5C5]')}
                                >
                                    프로필 변경
                                </MenuItem>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <MenuItem trbl="0 0 6px 6px"
                                    href="/"
                                    className={classNames(active ? 'bg-lightred' : '', 'block px-[39px] py-[15px] text-sm[16px] text-red')}
                                    onClick={logout}
                                >
                                    로그아웃
                                </MenuItem>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </NavBarContainer >
    )
}
export default Navbar;