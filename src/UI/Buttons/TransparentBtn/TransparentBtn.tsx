import s from './TransparentBtn.module.scss'
import {FC} from "react";
import Link from "next/link";

interface TransparentBtnInterface {
    title: string,
    href: string
}

export const TransparentBtn: FC<TransparentBtnInterface> = ({title, href}) => {
    return (

        <Link className={s.link} href={href}>{title}</Link>
    )
}