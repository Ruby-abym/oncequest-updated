import React, { useEffect } from 'react'

const UploadFilePreview = (props:any) => {
    const {file,filePath,RemoveImg,setFile}=props;
    useEffect(() => {
        return () => {}
    }, [])
    return (
        <>
           {file && filePath && file?.length > 0 &&
            <div className="form-group d-flex flex-row flex-wrap">
                {file && filePath && file.length> 0 && file?.map((img:any, i:any)=> {let fileUrl:any=`${filePath}${img}`; return (
                    <div className="m-1" style={{position: "relative", border: "1px solid #000"}} key={i}>
                        <button type="button" className="close AClass" onClick={()=>RemoveImg(img)}>
                        <span>&times;</span>
                        </button>
                        {["pdf", "docx","doc"].includes(fileUrl?.split(".")?.pop()) ? 
                        <a href={img && fileUrl} target="_blank" className="f-14" ><div style={{width: "90px", height: "100px", overflow:"hidden", padding: "2px", wordBreak: "break-all"}}>{img}</div></a>
                        : 
                        <a href={img && fileUrl} target="_blank"><img src={img && fileUrl} alt="" style={{width: "90px", height: "100px"}}/></a>
                        }
                    </div>
                )})}
            </div>
            } 
        </>
    )
}

export default UploadFilePreview
