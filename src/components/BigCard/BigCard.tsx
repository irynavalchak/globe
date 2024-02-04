import s from './BigCard.module.scss'
import Image, {StaticImageData} from "next/image";
import {FC, ReactNode} from "react";
import Link from "next/link";
import {BtnMintGreen} from "@/UI/Buttons/BtnMintGreen/BtnMintGreen";

interface BigCardInterface {
    title: string,
    description: string,
    className: string,
    btnTitle: string,
    href: string,
    src: StaticImageData,
    alt: string,
    children: ReactNode,
}

export const BigCard: FC<BigCardInterface> = ({className, title, description, btnTitle, href, src, alt, children}) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
                <Image src={src} alt={alt}/>
                {children}
            </div>
        </div>
    )
}