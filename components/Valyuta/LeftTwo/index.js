import React from 'react'
import Image from 'next/image'
import cls from './LeftTwo.module.css'
import yaponiya from '../../../public/yaponiya.jpg'



export default function LeftTwo() {
    return (
        <>

            <div className={cls.leftTwoTwo}>
                <div className={cls.imgTwoTwo}>
                    <Image className={cls.ForImg} src={yaponiya} alt="Picture of the author" />
                </div>
                <div>
                    <h2 className={cls.txtLorem}>Toshkentda plastik kartalar yordam <br /> tarqaldi albata xudi mansur kabi</h2>
                    <br />
                    <p className={cls.flagTexxt} >Bu haqida Consumer.uz hamjamiyati xabar bergan. Koʻchalard
                        <br /> xushmuomala odamlarning juftliklari odamlarga yaqinlashib,<br /> ularga
                        ravishda 100 ming soʻm lorem sit sit up
                    </p>
                    <p className={cls.dadee}>07.08.2021</p>
                </div>
            </div> 
           
        </>
    )
}