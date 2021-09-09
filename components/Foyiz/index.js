import React from 'react'

import BarChart from './BarChart'
import PopularArticle from './PopularArticle'

import cls from './Foyiz.module.css'

export default function BlackTitle() {
    return (
        <>
            <div>
                <BarChart />
                <PopularArticle />
            </div>
            <div className={cls.OfterBlack}>

                <div className={cls.LefTContainer}>
                    <h1 className={cls.TitleOfterBlack}>Eng mashhur</h1>
                    <h3 className={cls.LogoOfterBlack}>“Menda million dollarlik gʻoya bor!”: Biznesni  boshlash uchun qayerdan
                        pul topish
                        mumkin?</h3>
                    <p className={cls.LoremOfterBlack}>“Menda million dollarlik gʻoya bor, lekin pulni qayerdan topishni 
                        bilmayman ...” — bu
                        yondashuv bilan kelajakdagi millionerlar  deyarli har kuni allaqachon tashkil etilgan </p>
                    <div className={cls.ForLine}></div>
                    <h3 className={cls.LogoOfterBlack}>“Menda million dollarlik gʻoya bor!”: Biznesni  boshlash uchun qayerdan
                        pul topish
                        mumkin?</h3>
                    <p className={cls.LoremOfterBlack}>“Menda million dollarlik gʻoya bor, lekin pulni qayerdan topishni 
                        bilmayman ...” — bu
                        yondashuv bilan kelajakdagi millionerlar  deyarli har kuni allaqachon tashkil etilgan 
                    </p>

                    <h3 className={cls.SolidOfterBlack}>KO'PROQ O'QISH </h3>
                </div>

                
                <div className={cls.Linee}></div>

                <div className={cls.RightOfterBlack}>
                    <h1 className={cls.Bigger}>Siz internetda qaysi yo`nalish <br /> bo`yicha onlayn kurslarda tahsil <br /> olishni
                        xohlagan bo`lardingiz?
                    </h1>

                    <div className={cls.proses}>
                        <div className={cls.first}>
                            <div className={cls.ContentProses}>
                                <button className={cls.BtnBtn}></button>
                                <div>
                                    <h3>Marketing yo`nalishi</h3>
                                </div>
                            </div>
                            <div className={cls.ContentProsess}>
                                <div className={cls.LineLineProgras}></div>
                                <div className={cls.LineLinePrograsTwo}></div>
                            </div>
                        </div>
                        <div className={cls.first}>
                            <div className={cls.ContentProses}>
                                <button className={cls.BtnBtn}></button>
                                <div>
                                    <h3> boshqalar </h3>
                                </div>
                            </div>
                            <div className={cls.ContentProsess}>
                                <div className={cls.LineLinePrograsA}></div>
                                <div className={cls.LineLinePrograsTwoA}></div>

                            </div>

                        </div>
                        <div className={cls.first}>
                            <div className={cls.ContentProses}>
                                <button className={cls.BtnBtn}></button>
                                <div>
                                    <h3>Mansur uchun berilgan ovoz</h3>
                                </div>
                            </div>
                            <div className={cls.ContentProsess}>
                                <div className={cls.LineLinePrograsB}></div>
                                <div className={cls.LineLinePrograsTwoB}></div>

                            </div>

                        </div>
                        <div className={cls.first}>
                            <div className={cls.ContentProses}>
                                <button className={cls.BtnBtn}></button>
                                <div>
                                    <h3>Salim aka uchun berilgan ovozlar</h3>
                                </div>
                            </div>
                            <div className={cls.ContentProsess}>
                                <div className={cls.LineLinePrograsD}></div>
                                <div className={cls.LineLinePrograsTwoD}></div>

                            </div>

                        </div>
                        <div className={cls.first}>
                            <div className={cls.ContentProses}>
                                <button className={cls.BtnBtn}></button>
                                <div>
                                    <h3>Marketing yo`nalishi</h3>
                                </div>
                            </div>
                            <div className={cls.ContentProsess}>
                                <div className={cls.LineLineProgras}></div>
                                <div className={cls.LineLinePrograsTwo}></div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

