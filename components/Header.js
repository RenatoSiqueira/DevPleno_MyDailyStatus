import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className={'p-2 hover:underline hover:text-red-800 text-center'}>{children}</a>
        </Link>
    )
}

const Header = () => (
    <div className={'bg-gray-200'}>
        <h1 className={'h-24 py-4'}>LOGO</h1>
        <div className={'bg-gray-500 py-4'}>
            <NavLink href='/sobre'>
                Sobre
            </NavLink>
            <NavLink href='/cadastro'>
                Cadastro
            </NavLink>
            <NavLink href='/entrar'>
                Entrar
            </NavLink>
        </div>
    </div>
)

export default Header