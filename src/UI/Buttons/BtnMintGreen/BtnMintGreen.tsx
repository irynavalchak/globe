import s from "./BtnMintGreen.module.scss";
import Link from "next/link";
import {FC} from "react";
import Image from "next/image";
import letterIcon from "@/assets/img/letter.svg";

interface BtnMintGreenInterface {
    title: string,
    href: string
}

export const BtnMintGreen: FC<BtnMintGreenInterface> = ({title, href}) => {
    return (
        <div className={s.blockBtn}>
            <Image src={letterIcon} alt={'Letter Icon'}/>
            <Link className={s.link} href={href}>{title}</Link>

        </div>
    )
}