import s from './LoggedInHeader.module.scss'
import Image from "next/image";
import logo from '@/assets/img/logoWhite.svg'
import {BtnSingUp} from "@/UI/Buttons/BtnSignUp/BtnSingUp";


const linksFind = [
    {name: 'Find Flights', href: '/find-flights'},
    {name: 'Find Stays', href: '/find-stays'},
]

const linksLog = [
    {name: 'Login', href: '/login'},
    // {name: 'Sing up', href: '/singUp'},
]

export const LoggedInHeader = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>

                <div className={s.linksFindMenu}>
                    {
                        linksFind.map((linkFind) => {
                            return (
                                <ul className={s.menuListFindList}>
                                    <li><a className={s.linkFindMenu} href={linkFind.href}>{linkFind.name}</a></li>
                                </ul>

                            )
                        })
                    }

                </div>


                <div className={s.logo}>
                    <Image src={logo}
                           alt={'logo'}
                           width={110}
                           height={36}
                    />
                </div>

                <div className={s.linksLogMenu}>
                    {
                        linksLog.map((linkLog) => {
                            return (
                                <ul className={s.linkListLogList}>
                                    <li><a className={s.linkLogMenu} href={linkLog.href}>{linkLog.name}</a></li>
                                </ul>
                            )
                        })
                    }

                    <BtnSingUp title={'Sing up'} href={'/sing-up'}></BtnSingUp>
                </div>

            </div>
        </header>
    )
}
