import { ROUTE } from '@/Const/Route';

import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const BookButton = (props: any) => {
    const  {t}  = useTranslation();
    const router = useRouter();
    const { type, data } = props; 
    const [hvr, setHvr] = useState<any>(false);
    const handleCheckout = (e: any) => {
        e.preventDefault();
        router.push({pathname:ROUTE.CHECKOUT, query:{ type: type, ...data}},ROUTE.CHECKOUT); 
    }
    return (
        <Link href={"#"} onClick={(e: any) => handleCheckout(e)} className="button--hexagon booknow" onMouseLeave={(e: any) => setHvr(false)} onMouseEnter={(e: any) => setHvr(true)}>
            <span> <img src={!hvr ? "/assets/img/calendar.png" : "/assets/img/calendar2.png"} className="scale_booknow" />{t("book_now")}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
        </Link>
    ) 
}

export default BookButton
 