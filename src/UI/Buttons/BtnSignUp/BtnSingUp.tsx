import s from './BtnSingUp.module.scss'
import {FC} from "react";
import Link from "next/link";

interface BtnSingUpInterface {
    title: string,
    href: string
}

export const BtnSingUp: FC<BtnSingUpInterface> = ({title, href}) => {
    return (

           <Link className={s.link} href={href}>{title}</Link>
    )
}