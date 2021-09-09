import React from 'react'
import cls from './Article.module.css'
import Image from 'next/image'
import Left from './Left/index'
import Righttt from './right/index'




export default function Article() {
    return (
        <>
            <div className={cls.ContainerTitle}>
                <div className={cls.TitleLoGo}><h3 className={cls.LogoTitle}>SHAXSIY RIVOJLANISH |</h3><span>09.09.2021</span></div>
                <p class={cls.descriptionLogo}>
                    Hissiy intellekt baland odamlar “Oltin savol” dan qanday foydalanadilar: his-tuyg‘ularingizni boshqarish, yengilroq qarorlar qabul qilish va kamroq pushaymon bo‘lish
                </p>
            </div>
            <div className={cls.Companents}>
            < Left/>
            <Righttt />
            
            </div>
        </>
    )
}