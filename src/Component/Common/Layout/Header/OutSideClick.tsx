import React, { useEffect } from "react";
export function MenuOutSideClick (ref:any, setData:any) {
    useEffect(() => {
        function Outclick (e:any) {
            if(ref.current && !ref.current.contains(e.target)) {
                setData(false);
            } else {
                setData(true);
            }
        }
        document.addEventListener("click", Outclick)
        return () => {
        document.removeEventListener("click", Outclick)
        }
    }, [ref])
}