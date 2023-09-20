import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { getAllCityFromLocal, getSelectedCity } from '@/Utils';
import { dashboardAction } from '@/redux/action';
import Aos from 'aos';
import Scroller from '../Scroller/Scroller';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./Header'), {
  ssr:false
})
const Footer = dynamic(() => import('./Footer'), {
  ssr:false
})
function Layout({children}:any) {
   const dispatch = useDispatch();
   const router = useRouter();
   const {pathname} = router;
   const [city, setCity] = useState("");
    const toastData = useSelector((state: any) => state.common.toast);
    const toastId = useRef<any>(null);
    const cityData = useSelector((state:any) => state.dashboard.city);

  const localCity= async ()=> {
    let dt= await !!getAllCityFromLocal();
    return dt;
  }
  useEffect(() => {
    if(!!!localStorage.getItem("oq:cityData") || pathname  === "/"){
      dispatch(dashboardAction.getCityAction({id:""}));
    }
    return () => {}
  }, [pathname])

  useEffect(() => {
    if(cityData?.length > 0){
      localStorage.setItem("oq:cityData", JSON.stringify(cityData));
    }
    return () => {}
  }, [cityData])
  
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (toastData) {
      notify(toastData.message, toastData.type);
    }
  }, [toastData]);

  const notify = (message: string, type: any) => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast(message, { type: type, position: toast.POSITION.TOP_RIGHT, autoClose: 3000 });
    }
  }
  const SetCity =async ()=> {
    await localStorage.setItem("oq:city",city || "");
  }
  useEffect(() => {
    if(city) {
      SetCity();
    }
    let _city:any=getSelectedCity();
    setCity(_city);
  }, [city]);

  return (
    <>
      <Header cityData={cityData} city={city} setCity={setCity}></Header>
      <main>
        <Scroller></Scroller>
        {children}
      </main>
      <Footer cityData={cityData} setCity={setCity}></Footer>
      <ToastContainer 
        theme={"colored"}
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </>
  );
}

export default Layout;
