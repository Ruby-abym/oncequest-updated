import React, { useState } from 'react'
import { ROUTE } from '@/Const/Route'
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";
import Link from 'next/link';

const DetailBookButton = (props:any) => {
    const { t } = useTranslation();
    const {type, data,className}=props;
    const router=useRouter();
    const handleCheckout = (e:any) => {
        e.preventDefault();
        console.log(data)
        router.push({pathname:ROUTE.CHECKOUT, query:{type:type,data:data}},ROUTE.CHECKOUT);
    }
    return (
        <Link href={"#"} onClick={(e:any)=> handleCheckout(e)} className={className ? className :"button--hexagon normal active"}>
            <span>{t("book")} {"@"} &nbsp;&nbsp;&#x20B9;{`${data?.SellingPrice}`}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span>
        </Link>
    )
}

export default DetailBookButton