import React from 'react'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Slider from 'react-slick'
import { ROUTE } from '@/Const/Route';


const ImgSlider = () => {
    const router = useRouter();
    const {t} = useTranslation();
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    };
    let srcArray = router.pathname === ROUTE.BENGALURULAB ? [
        t("images.bg_lab.bl1"),
        t("images.bg_lab.bl2"),
        t("images.bg_lab.bl3"),
        t("images.bg_lab.bl4"),
        t("images.bg_lab.bl5"),
        t("images.bg_lab.bl6"),
    ] : router.pathname === ROUTE.KOLKATALAB ? [
        t("images.kol_lab.kol1"),
        t("images.kol_lab.kol2"),
        t("images.kol_lab.kol3"),
        t("images.kol_lab.kol4")
    ] : router.pathname === ROUTE.LUDHIANALAB ? [
        t("images.ludhiana_lab.ludhiana_lab1"),
        t("images.ludhiana_lab.ludhiana_lab2"),
        t("images.ludhiana_lab.ludhiana_lab3"),
        t("images.ludhiana_lab.ludhiana_lab4")
    ] : [];

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col bg_lab_slider">
                <Slider {...settings}>
                    {srcArray && srcArray.length > 0 && srcArray.map((src: any ,i:number) => (
                        <div key={i}>
                            <img className="scale" src={src} alt=""/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ImgSlider