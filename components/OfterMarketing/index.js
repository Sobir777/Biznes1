import React from 'react'
import cls from './OfterMarketing.module.css'
import Image from 'next/image'
import bbb from '../../public/BigImgg.jpg'
import bbbb from '../../public/aaaaa.jpg'
export default function Marketing() {
    return (
        <>
            <div className={cls.TitleM}><h1 className={cls.TitleLogoM}> H R</h1></div>
            <div className={cls.ContainerThree}>

                <div className={cls.ContainerThreeRight}>
                    <h3 className={cls.TextWithBorderr}>Moskva birjasida xususiy investorlar <br /> 13 milliondan oshdi milliondan oshdi
                    </h3>
                    <h3 className={cls.TextWithBorder}>Moskva birjasida xususiy investorlar <br /> 13 milliondan oshdi </h3>
                    <h3 className={cls.TextWithBorder}>Moskva birjasida xususiy investorlar <br /> 13 milliondan </h3>
                    <h3 className={cls.TextWithBorder}>Moskva birjasida xususiy investorlar <br /> 13 milliondan oshdi milliondan</h3>
                    <h3 className={cls.TextWithBorder}>Moskva birjasida xususiy investorlar <br /> 13 milliondan oshdi milliondan</h3>
                </div>


                <div className={cls.ContainerThreeLeft}>
                    <div className={cls.ContentThreeImg}>
                        <Image className={cls.ImgLeftImg} src={bbb} alt="Picture of the author" />
                    </div>
                    <h2 className={cls.TitleThree}> Germaniya Oʻzbekiston va mansur
                        qaysi  vaksinani yetkazib beradi?
                    </h2>
                    <h4 className={cls.LogoThree}>Germaniya hukumati Oʻzbekistonga 355 ming
                        200 <br /> Tojikistonga esa 100
                        ming 800 doza vaksina ajratadi. Oʻzbekiston...</h4>
                    <p className={cls.LogoTitleThree}>10.08.2021</p>
                </div>

                <div className={cls.ContainerThreeMidle}>
                    <div className={cls.ContentImgText}>
                        <div className={cls.ContainerImg}>
                            <Image className={cls.MidleImgg} src={bbbb} alt="Picture of the author" />
                        </div>
                        <div className={cls.ForTextt}>
                            <h3 className={cls.TexttTextt}>Yaponiyada ozbek  talabalalar  tayyorlash   uchun qoʻshimcha</h3>
                            <h5 className={cls.Tteexxtt}>Qayd etilishicha, Oʻzbekiston elchisi
                            </h5>
                            <p className={cls.LoremLorem}>12.04.2021</p>
                        </div>
                    </div>

                    <div className={cls.BorderLine}></div>

                    <div className={cls.ContentImgText}>
                        <div className={cls.ContainerImg}>
                            <Image className={cls.MidleImgg} src={bbbb} alt="Picture of the author" />
                        </div>
                        <div className={cls.ForTextt}>
                            <h3 className={cls.TexttTextt}>Yaponiyada ozbek  talabalalar  tayyorlash   uchun qoʻshimcha</h3>
                            <h5 className={cls.Tteexxtt}>Qayd etilishicha, Oʻzbekiston elchisi
                            </h5>
                            <p className={cls.LoremLorem}>12.04.2021</p>
                        </div>
                    </div>
                </div>



            </div>
            <div className={cls.ForDashidLine}><h2> KO'PROQ O'QISH  </h2></div>

        </>
    )
}