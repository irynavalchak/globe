import s from './TheHeaderDefault.module.scss'
import Link from "next/link";
import Image from "next/image";
//UI
import {BtnSingUp} from "@/UI/Buttons/BtnSignUp/BtnSingUp";
//images
import logo from '@/assets/img/logoWhite.svg'
import planeIcon from '@/assets/img/planeIcon.svg';
import bedIcon from '@/assets/img/bedIcon.svg';

const linksFind = [
    {name: 'Find Flights', href: '/find-flights', icon: planeIcon},
    {name: 'Find Stays', href: '/find-stays', icon: bedIcon},
]

const linksLog = [
    {name: 'Login', href: '/login'},
]

export const TheHeaderDefault = () => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>

                <div className={s.linksFindMenu}>
                    {
                        linksFind.map((linkFind) => {
                            return (
                                <ul className={s.findMenuList}>

                                    <li><Link className={s.linkFind} href={linkFind.href}>
                                        <Image src={linkFind.icon} alt={linkFind.name} width={24} height={24}/>
                                        {linkFind.name}</Link></li>
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
                                <ul className={s.logMenuList}>
                                    <li><Link className={s.linkLog} href={linkLog.href}>{linkLog.name}</Link></li>
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
