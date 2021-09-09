import React from 'react'
import Image from 'next/image'
import cls from './Right.module.css'
import miya from '../../../public/miya.jpg'
import { Flag } from '../../svg'

export default function Right() {
    return (
        <>
            <div className={cls.ContainerValyuta}>
                <div className={cls.conTainer}>
                    <div className={cls.cost}>
                        <div className={cls.flag}>
                            <div className={cls.flag}><Flag /></div>
                            <p> USD </p>
                        </div>
                        <div className={cls.lll}>
                            <p> 10,639.79 <span className={cls.color}>(0.20%) </span> </p>
                        </div>
                    </div>

                    <div className={cls.cost}>
                        <div className={cls.flag}>
                            <div className={cls.flag}><Flag /></div>
                            <p> EUR </p>
                        </div>
                        <div>
                            <p> 12,499.59 <span className={cls.color} >(0.20%) </span> </p>
                        </div>
                    </div>
                    <div className={cls.cost}>
                        <div className={cls.flag}>
                            <div className={cls.flag}><Flag /></div>
                            <p> RUB </p>
                        </div>
                        <div >
                            <p> 10,632.229.79 <span className={cls.color} >(0.20%) </span> </p>
                        </div>
                    </div>
                    <div className={cls.cost}>
                        <div className={cls.flag}>
                            <div className={cls.flag}><Flag /></div>
                            <p> USDTRY </p>
                        </div>
                        <div >
                            <p> 10,639.79 <span className={cls.color} >(0.20%) </span> </p>
                        </div>
                    </div>
                </div>
                <div className={cls.conTainer}>
                    <div className={cls.rasim}>
                        <Image className={cls.rightImgImg} src={miya} alt="Picture of the author" />
                    </div>
                </div>
            </div>
        </>
    )
}
