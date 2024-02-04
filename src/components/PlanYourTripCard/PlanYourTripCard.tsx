import s from './PlanYourTripCard.module.scss'
import Image, {StaticImageData} from "next/image";
import {FC} from "react";

interface PlanYourTripCardInterface {
    src: StaticImageData,
    alt: string,
    title: string,
}

export const PlanYourTripCard: FC<PlanYourTripCardInterface> = ({src, alt, title}) => {
    return (
        <div className={s.item}>

            <Image src={src}
                   alt={alt}
                   width={90}
                   height={90}
            />


            <div className={s.itemText}>
                <p>{title}</p>
                <p>Flight Hotels Resorts</p>
            </div>
        </div>
    )
}