import React from 'react'
import cls from './Footer.module.css'
import Link from 'next/link'
import { FacebookIcon, Telegramm, Youtobe, Instagram } from '../svg'

export default function Footer() {
    return (
        <>
            <div className={cls.CantainerFooter}>
                <div className={cls.FooterFooterr}>
                    <div className={cls.FooterLeft}>
                        <h1 className={cls.FirstTitle}>BiznesRivoj</h1>
                        <h3 className={cls.ForMedia}>Marketing</h3>
                        <h3 className={cls.ForMedia}>HR</h3>
                        <h3 className={cls.ForMedia}>Moliya</h3>
                        <h3 className={cls.ForMedia}>Texnologiya</h3>
                        <h3 className={cls.ForMedia}>Shaxsiy rivojlanish</h3>
                        <h3 className={cls.ForMedia}>Tadbirlar</h3>
                        <h3 className={cls.ForMedia}>Tadbirlar</h3>
                    </div>

                    <div className={cls.FooterMidle}>
                        <div className={cls.FooterMidleInto}>
                            <div className={cls.aa}>  E-mail manzil:<span> <i>info@biznesrivoj.uz </i> </span>  </div>
                            <div className={cls.aa}>Telefon raqam: <span> <i>+99894 364-88-88 </i> </span> </div>
                            <div className={cls.mansur}>
                                <a href="https://www.google.com/maps/@41.2865333,69.3611663,79m/data=!3m1!1e35">kartaga kirmoq</a>
                                <div className={cls.IconsFacebook}>

                                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fbiznesrivoj.uz%252Farticles%252Fbukmekerlik-faoliyatini-tartibga-soluvchi-alohida-qonun-qabul-qilinishi-mumkin&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU"><FacebookIcon /></a>
                                    <a href="https://telegram.me/share/url?url=https://biznesrivoj.uz/articles/bukmekerlik-faoliyatini-tartibga-soluvchi-alohida-qonun-qabul-qilinishi-mumkin"><Telegramm /></a>
                                    <a href="https://www.youtube.com/channel/UC2Xz8jPJgzuzdwMpqiGa76g"><Youtobe /></a>
                                    <a href="https://www.instagram.com/biznesrivoj/"><Instagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cls.FooterRight}>
                        <div className={cls.FooteerrFirst}>© 2021 BiznesRivoj MChJ. Barcha huquqlar himoyalangan.</div>
                        <div className={cls.FooteerrSecond}>O'Z/УЗ</div>
                    </div>
                </div>
            </div>
        </>
    )
}




