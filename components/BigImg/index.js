import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cls from './BigImg.module.css'
import biznes from '../../public/biznes.jpg'
import rightImg from '../../public/rightImg.jpg'
import aaa from '../../public/aaa.jpg'


export default function BigImg() {
    return (
        <>

            <div className={cls.container}>
                <div className={cls.contentLeft}>
                    <div className={cls.Bigimgg}>
                        <div className={cls.BIGimg}>
                            <Link href="/article">
                                <Image className={cls.imgggg} src={biznes} alt="Picture of the author" />
                            </Link>
                            {/* <Image className={cls.imgggg} src={biznes} alt="Picture of the author" /> */}
                        </div>
                    </div>

                    <div className={cls.teexxtt}>
                        <h1 className={cls.LogoTitle}>Raqobatbardosh va. eng kuchli SMM agenstvo ochish uchun <br /> nimalarni bilish kerak: Doniyor
                            Abdullayevdan maslahatlar</h1>
                        <h3 className={cls.lormText}>
                            Bugungi kunda SMM sohasi eng keng tarqalgan va katta talabga ega sohalardan biriga <br /> aylandi.
                            Ushbu sohaga bo‘lgan zaruriyat, unga qiziquvchilar sonini keskin oshirdi. Buni...
                        </h3>
                        <div className={cls.containerDescription}>
                            <p clasNames={cls.description}> 07.08.2021</p>
                        </div>

                        <div className={cls.bothOf}>
                            <div className={cls.ContainerBothOf}>
                                <div className={cls.bothOfContent}>
                                    <Image className={cls.imgg} src={aaa} alt="Picture of the author" />

                                </div>
                                <div className={cls.titlea}>
                                    <h3 className={cls.DesctiptionLOrem}>Lorem ipsum dolor sit amet consectetur ipsut <br />
                                        adipisicing elit.</h3>
                                    <p className={cls.dadee}>07.08.2021</p>
                                </div>
                            </div>
                            <div className={cls.ContainerBothOf}>
                                <div className={cls.bothOfContent}>
                                    <Image className={cls.imgg} src={aaa} alt="Picture of the author" />

                                </div>
                                <div className={cls.titlea}>
                                    <h3 className={cls.DesctiptionLOrem}>Lorem ipsum dolor sit amet consectetur ipsut <br />
                                        adipisicing elit.</h3>
                                    <p className={cls.dadee}>07.08.2021</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={cls.contentRight}>
                    <div className={cls.rightText}>
                        <button className={cls.btnOne}> Eng mashhur </button>
                        <h1 className={cls.texxt}>Lorem ipsum dolor sit amet elit nulla consectetur   </h1>
                        <h1 className={cls.texxtt}>Lorem ipsum dolor sit amet elit nulla consectetur  </h1>
                        <h1 className={cls.texxtt}>Lorem ipsum dolor sit amet elit nulla consectetur  </h1>
                        <h1 className={cls.texxtt}>Lorem ipsum dolor sit amet elit nulla consectetur  </h1>
                        <h1 className={cls.texxtt}>Lorem ipsum dolor sit amet elit nulla consectetur  </h1>
                        <h1 className={cls.texxtt}>Lorem ipsum dolor sit amet elit nulla consectetur  </h1>
                        <h1 className={cls.texxtt}>Lorem ipsum dolor sit amet elit nulla consectetur  </h1>
                        <h1 className={cls.texxttt}>Lorem ipsum dolor sit amet elit nulla consectetur </h1>
                    </div>
                    <div className={cls.rightImgRight}>
                        <Image className={cls.imgg} src={rightImg} alt="Picture of the author" />
                    </div>
                </div>


            </div>

        </>
    )

}
