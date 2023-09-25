import { ROUTE } from '@/Const/Route';

import React, { useState } from 'react'
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
const BookButton = (props: any) => {
    const  {t}  = useTranslation();
    const { type, data } = props; 
   
    
    const [hvr, setHvr] = useState<any>(false);
   
    return (
        <Link href={{
            pathname: ROUTE.CHECKOUT,
            query: { type: type, data: data },
          }}  className="button--hexagon booknow" onMouseLeave={(e: any) => setHvr(false)} onMouseEnter={(e: any) => setHvr(true)}>
            <span> <img src={!hvr ? "/assets/img/calendar.png" : "/assets/img/calendar2.png"} className="scale_booknow" />{t("book_now")}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
        </Link>
    ) 
}

export default BookButton
 