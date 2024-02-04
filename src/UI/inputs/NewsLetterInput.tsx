import s from './NewsLettterInput.module.scss'

export const NewsLetterInput = () => {
    return (
        <input className={s.input} type="text" placeholder={'Your email address'}/>

    )
}