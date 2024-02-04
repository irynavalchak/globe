import s from './BtnBlackishGreen.module.scss'
import {FC} from "react";

interface BtnBlackishGreenInterface {
    title: string,
}

export const BtnBlackishGreen: FC<BtnBlackishGreenInterface> = ({title}) => {
    return (
        <button className={s.btn}>{title}</button>
    )
}