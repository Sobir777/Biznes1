import React from 'react'
import cls from './Valyuta.module.css'
import LeftFirst from './LeftFirst'
import LeftTwo from './LeftTwo'
import Right from './Right'

export default function Valyuta() {
    return (
        <>
            <div className={cls.containerTwo}>
                <div className={cls.titleTwo}>
                    <h2>So'nggi yangiliklar</h2>
                    <h2>Valyuta</h2>
                </div>
                <div className={cls.containerTowTwo}>
                    <div className={cls.leftTwo}>
                        <div><LeftFirst /></div>
                        <div>< LeftTwo /></div>
                    </div>
                    <div className={cls.rightTwo}>
                        <div>< Right /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
