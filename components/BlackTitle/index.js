import React from 'react'
import cls from './BlackTitle.module.css'

export default function BlackTitle() {
    return (
        <>
            <div className={cls.ContainerBlack}>
                <h1 className={cls.ForColor}>"Siz yaxshi mutaxassis bo‘lishingiz mumkin, ammo o‘z bilimingizni qimmatroqqa sotish uchun
                    albatta chet "</h1>
                <h3 className={cls.ForColorr}><i>Bobir Akilkhanov</i></h3>
            </div>
        </>
    )
}